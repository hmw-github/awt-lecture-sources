import {
  Customer,
  Invoice,
  LatestInvoice,
  LatestInvoiceRaw,
  Revenue,
  User,
} from './definitions';
import { formatCurrency } from './utils';

const backendUrl = process.env.BACKEND_URL;

/**
 * Load revenue data from server.
 */
export async function fetchRevenue(): Promise<Revenue[]> {
  // Artificially delay a response for demo purposes.
  // Don't do this in production :)
  console.log('Fetching revenue data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const response = await fetch(backendUrl + 'revenue');
    if (!response.ok) {
      throw new Error('fetchRevenue: Network response was not ok');
    }
    const data = await response.json();
    console.log(`fetchRevenue: ${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    console.error('fetchRevenue: Error fetching data:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

/**
 * Loads the 5 most recent invoices and formats the amount value with USD currency symbol.
 */
export async function fetchLatestInvoices(): Promise<LatestInvoice[]> {
  try {
    const response = await fetch(backendUrl + 'invoice/latest/5');
    if (!response.ok) {
      throw new Error('fetchLatestInvoices: Network response was not ok');
    }

    const data = await response.json();
    // replace amount (number) by formatted currency value in USD (string)
    const latestInvoices = data.map((invoice: LatestInvoiceRaw) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

/**
 * Load customers and invoices and calculate sums for overview cards
 */
export async function fetchCardData() {
  try {
    // we simlate a long (5 seconds) waiting time for the server call to finish, to demonstrate the 
    // use of Suspense - don' do this in production!
    console.log('Fetching card data...');
    await new Promise((resolve) => setTimeout(resolve, 5000));
  
    let response = await fetch(backendUrl + 'customer');
    if (!response.ok) {
      throw new Error('fetchCardData: Network response fetching customer data was not ok');
    }
    const customers: Customer[] = await response.json();
    console.log(`customers: ${JSON.stringify(customers)}`);
    
    response = await fetch(backendUrl + 'invoice/latest/0'); // 0 means 'get all, no limit'
    if (!response.ok) {
      throw new Error('fetchCardData: Network response fetching invoices was not ok');
    }
    const invoices: Invoice[] = await response.json();
    let totalPaidInvoices = 0;
    let totalPendingInvoices = 0;

    console.log('invoices: ' + JSON.stringify(invoices));

    invoices.forEach((invoice) => {
      if (invoice.status === 'paid') {
        totalPaidInvoices += invoice.amount;
      } else if (invoice.status === 'pending') {
        totalPendingInvoices += invoice.amount;
      }
    });

    return {
      numberOfCustomers: customers.length,
      numberOfInvoices: invoices.length,
      totalPaidInvoices: formatCurrency(totalPaidInvoices),
      totalPendingInvoices: formatCurrency(totalPendingInvoices),
    };
  } catch (error: any) {
    console.error('fetchCardData: ', error);
    throw new Error(`fetchCardData: Failed to fetch card data (${error.message})`);
  }
}

const ITEMS_PER_PAGE = 6;

/**
 * Loads page `currentPage` of ITEMS_PER_PAGE invoices filtered by `query` 
 * @param query 
 * @param currentPage 
 */
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
): Promise<LatestInvoice[]> {
  try {
    let response: any;

    response = await fetch(backendUrl + `invoice/filtered?query=${query}&currentPage=${currentPage}`);
    if (!response.ok) {
      throw new Error('fetchFilteredInvoices: Network response fetching invoices was not ok');
    }

    const invoices: LatestInvoice[] = await response.json();
    return invoices;
  } catch (error: any) {
    throw new Error(`fetchFilteredInvoices: Failed to fetch invoices (${error.message})`);
  }
}

/**
 * Returns the number of pages for invoice listing after applying the filter `query`.
 * Needed for pagination.
 */
export async function fetchInvoicesPages(query: string): Promise<number> {
  try {
    const invoices: LatestInvoice[] = await fetchFilteredInvoices(query, -1);
    const totalPages = Math.ceil(Number(invoices.length) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error('Failed to fetch total number of invoices.');
  }
}

/**
 * Returns the invoice for given id or null (not found)
 */
export async function fetchInvoiceById(id: string): Promise<Invoice | null> {
  try {
    const response = await fetch(backendUrl + `invoice?id=${id}`);
    if (!response.ok) {
      throw new Error('fetchInvoiceById: Network response fetching invoices was not ok');
    }
    let invoice: Invoice = await response.json();
    invoice = {
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    };

    return invoice;
  } catch (error: any) {
    return null;
  }
}

/**
 * Returns all customers
 */
export async function fetchCustomers(): Promise<Customer[]> {
  try {
    const response = await fetch(backendUrl + 'customer');
    if (!response.ok) {
      throw new Error('fetchCustomers: Network response fetching invoices was not ok');
    }
    const customers: Customer[] = await response.json();
    return customers;
  } catch (err) {
    throw new Error('Failed to fetch all customers: ' + JSON.stringify(err));
  }
}

/**
 * Saves the given invoice at the server and returns the new invoice with its id
 */
export async function storeInvoice(invoice: Invoice): Promise<Invoice> {
  return fetch(backendUrl + 'invoice', {
    method: 'POST', // Specify the request method as POST
    headers: {
      'Content-Type': 'application/json' // Set the Content-Type header to JSON
    },
    body: JSON.stringify(invoice) // Convert the data object to a JSON string
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('createInvoice: Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.error('createInvoice - Error:', error);
  });
}

/**
 * Updates the given invoice identified by its id on the server
 */
export async function changeInvoice(invoice: Invoice): Promise<void> {
  return fetch(backendUrl + 'invoice/' + invoice.id, {
    method: 'PUT', // Specify the request method as PUT 
    headers: {
      'Content-Type': 'application/json' // Set the Content-Type header to JSON
    },
    body: JSON.stringify(invoice) // Convert the data object to a JSON string
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('changeInvoice: Network response was not ok ' + response.statusText);
    }
  })
}

/**
 * Deletes the invoice for the given id
 */
export async function removeInvoice(id: string): Promise<void> {
  fetch(backendUrl + `invoice/${id}`, {
    method: 'DELETE',
  })
  .catch(err => {
    throw Error('Error deleting invoice: ' + err);
  });
}

/**
 * Loads the user with the given email. If not found, an Error is thrown.
 */
export async function fetchUser(email: string): Promise<User> {
  try {
    const response = await fetch(backendUrl + 'user?email=' + email);
    if (!response.ok) {
      throw new Error('fetchUser: Network response fetching invoices was not ok');
    }
    const user: User = await response.json();
    return user;
  } catch (err) {
    throw new Error('Failed to fetch user: ' + JSON.stringify(err));
  }
}