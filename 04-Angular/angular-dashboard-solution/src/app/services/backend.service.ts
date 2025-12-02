import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { Customer } from '../models/Customer';
import { Invoice } from '../models/Invoice';
import { formatCurrency } from '../utils';
import { Revenue } from '../models/Revenue';
import { LatestInvoice } from '../models/LatestInvoice';

export const ITEMS_PER_PAGE = 6;

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private readonly backendUrl = environment.BACKEND_URL;
  //configure loading delays in ms
  private readonly CARD_DATA_LOADING_DELAY = 6000;
  private readonly LATEST_INVOICES_LOADING_DELAY = 7000;
  private readonly REVENUES_LOADING_DELAY = 4000;

  constructor(private httpClient: HttpClient) {}

  /**
   * Get User data for email address.
   * If email does not exist,
   */
  fetchUser(email: string): Observable<User | null> {
    return new Observable<User | null>((subscriber) => {
      this.httpClient.get(this.backendUrl + 'user?email=' + email).subscribe({
        next: (data) => {
          const user = data as User;
          subscriber.next(user);
        },
        error: (error) => {
          subscriber.next(null);
        },
      });
    });
  }

  /**
   * Load customers and invoices and calculate sums for overview cards
   */
  fetchCardData(): Observable<any | null> {
    return new Observable<any | null>(subscriber => {
      forkJoin([
        this.httpClient.get(this.backendUrl + 'customer'),
        this.httpClient.get(this.backendUrl + 'invoice/latest/0')
      ]).subscribe(([data1, data2]) => {
        const customers = data1 as Customer[];
        const invoices = data2 as Invoice[];
        console.log(`customers: ${JSON.stringify(customers)}`);
        console.log('invoices: ' + JSON.stringify(invoices));

        let totalPaidInvoices = 0;
        let totalPendingInvoices = 0;

        invoices.forEach((invoice) => {
          if (invoice.status === 'paid') {
            totalPaidInvoices += invoice.amount;
          } else if (invoice.status === 'pending') {
            totalPendingInvoices += invoice.amount;
          }
        });

        const result = {
          numberOfCustomers: customers.length,
          numberOfInvoices: invoices.length,
          totalPaidInvoices: formatCurrency(totalPaidInvoices),
          totalPendingInvoices: formatCurrency(totalPendingInvoices),
        };
        setTimeout(() => {
          subscriber.next(result);
        }, this.CARD_DATA_LOADING_DELAY);
      });
    });
  }

  /**
   * Load revenue data from server
   */
  fetchRevenue(): Observable<Revenue[]> {
    return new Observable<Revenue[]>(subscriber => {
      this.httpClient.get<Revenue[]>(this.backendUrl + '/revenue')
      .subscribe(revenue => {
        setTimeout(() => {
          subscriber.next(revenue);
        }, this.REVENUES_LOADING_DELAY);
      });
    });
  }

  /**
   * Loads the 5 most recent invoices and formats the amount value with USD currency symbol.
   */
  fetchLatestInvoices(): Observable<LatestInvoice[]> {
    return new Observable<LatestInvoice[]>(subscriber => {
      this.httpClient.get<LatestInvoiceRaw[]>(this.backendUrl + 'invoice/latest/5')
      .subscribe(invoices => {
        // replace amount (number) by formatted currency value in USD (string)
        const latestInvoices = invoices.map(invoice => ({
          ...invoice,
          amount: formatCurrency(invoice.amount),
        }));

        setTimeout(() => {
          subscriber.next(latestInvoices);
        }, this.LATEST_INVOICES_LOADING_DELAY);
      });
    });
  }

  /**
   * Loads page `currentPage` of ITEMS_PER_PAGE invoices filtered by `query`
   * @param query
   * @param currentPage
   */
  fetchFilteredInvoices(query: string, currentPage: number): Observable<LatestInvoice[]> {
    return new Observable<LatestInvoice[]>(subscriber => {
      this.httpClient.get<LatestInvoice[]>(this.backendUrl
        + `invoice/filtered?query=${query}&currentPage=${currentPage}`).subscribe(invoices => {
          subscriber.next(invoices);
        });
    });
  }

  /**
   * Returns the number of pages for invoice listing after applying the filter `query`.
   * Needed for pagination.
   */
  fetchInvoicesPages(query: string): Observable<number> {
    return new Observable<number>(subscriber => {
      this.fetchFilteredInvoices(query, -1).subscribe(invoices => {
        const totalPages = Math.ceil(Number(invoices.length) / ITEMS_PER_PAGE);
        subscriber.next(totalPages);
      });
    });
  }

  /**
   * Get all customers.
   */
  fetchCustomers(): Observable<Customer[]> {
    return new Observable<Customer[]>(subscriber => {
      this.httpClient.get<Customer[]>(this.backendUrl + 'customer').subscribe(customers => {
        subscriber.next(customers);
      });
    });
  }

  /**
   * Saves the given invoice at the server and returns the new invoice with its id
   */
  storeInvoice(invoice: Invoice): Observable<Invoice> {
    return new Observable<Invoice>(subscriber => {
      this.httpClient.post<Invoice>(this.backendUrl + 'invoice', invoice)
      .subscribe(invoice => {
        subscriber.next(invoice);
      });
    });
  }

  /**
   * Updates the given invoice identified by its id on the server
   */
  updateInvoice(invoice: Invoice): Observable<void> {
    return new Observable<void>(subscriber => {
      this.httpClient.put<void>(this.backendUrl + 'invoice/' + invoice.id, invoice)
      .subscribe(_ => {
        subscriber.next();
      });
    });
  }

  /**
   * Deletes the invoice for the given id
   */
  deleteInvoice(id: string): Observable<void> {
    return new Observable<void>(subscriber => {
      this.httpClient.delete<void>(this.backendUrl + 'invoice/' + id)
      .subscribe(_ => {
        subscriber.next();
      });
    });
  }

  fetchInvoiceById(id: string): Observable<Invoice | null> {
    return new Observable<Invoice | null>(subscriber => {
      this.httpClient.get<Invoice | null>(this.backendUrl + 'invoice?id=' + id)
      .subscribe(invoice => {
        subscriber.next(invoice);
      });
    });
  }
}