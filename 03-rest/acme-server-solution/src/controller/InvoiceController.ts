import { Request, Response } from "express";
import { Data } from "../database/Data";
import { InvoiceForCustomer } from "../models/InvoiceForCustomer";
import { Invoice } from "../models/Invoice";

/**
 * Controller module providing endpoints for revenue data.
 */
export class InvoiceController {
  /**
   * Returns an array of invoices with customer information.
   * step 1: join invoices and customers
   * step 2: sort by date descending
   * step 3: apply limit, limit == 0 means all
   * 
   * @returns InvoiceForCustomer[]
   */
  static getLatestInvoices = (req: Request, res: Response) => {
    
    const limit = Number(req.params.limit);
    console.log(`> GET /invoice/latest/${limit}`);

    let result: InvoiceForCustomer[] = [];
    // step 1: join invoices and customers
    Data.invoices.forEach((invoice) => {
      const customer = Data.customers.get(invoice.customer_id);
      const value = new InvoiceForCustomer(
        invoice.id,
        customer.name,
        customer.image_url,
        customer.email,
        invoice.date,
        invoice.amount,
        invoice.status
      );
      result.push(value);
    });
    // step 2: sort by date descending
    result.sort(
      (i1, i2) => new Date(i2.date).getTime() - new Date(i1.date).getTime()
    );
    // step 3: apply limit, limit == 0 means all
    if (limit > 0) result = result.filter((element, index) => index < limit);

    console.log(`< GET /invoice/latest => ${JSON.stringify(result)}`);
    res.set("Content-Type", "application/json");
    res.status(200).send(result);
    
  }

  static ITEMS_PER_PAGE = 6;

  /**
   * Returns an array of invoices with customer information.
   * step 1: join invoices and customers and apply filter
   * step 2: sort data descending by date
   * step 3: carve out ITEMS_PER_PAGE elements to return only one page 
   *  unless currentPage == -1 (return all pages)
   * 
   * @returns InvoiceForCustomer[]
   */
  static getFilteredInvoices = (req: Request, res: Response) => {
    
    const queryParam = req.query!.query as string;
    const query = queryParam.trim().toLowerCase();
    const currentPage = Number(req.query.currentPage);
    console.log(`> GET /invoice/filtered?query=${query}&currentPage=${currentPage}`);

    let result: InvoiceForCustomer[] = [];
    // step 1: join invoices and customers and apply filter
    Data.invoices.forEach((invoice) => {
      const customer = Data.customers.get(invoice.customer_id);
      const value = new InvoiceForCustomer(
        invoice.id,
        customer.name,
        customer.image_url,
        customer.email,
        invoice.date,
        invoice.amount,
        invoice.status
      );
      if (
        query.length == 0 ||
        value.toString().toLowerCase().indexOf(query) != -1
      ) {
        result.push(value);
      }
    });
    // step 2: sort data descending by date
    result.sort(
      (i1, i2) => new Date(i2.date).getTime() - new Date(i1.date).getTime()
    );
    // step 3: find page unless currentPage == -1
    if (currentPage != -1) {
      const offset = (currentPage - 1) * InvoiceController.ITEMS_PER_PAGE;
      result = result.filter(
        (element, index) =>
          index >= offset && index < offset + InvoiceController.ITEMS_PER_PAGE
      );
    }

    console.log(`< GET /invoice/filtered => ${JSON.stringify(result)}`);
    res.set("Content-Type", "application/json");
    res.status(200).send(result);
    
  }

  /**
   * Creates a new invoice from the data in the body.
   * @returns id of new invoice
   */
  static createInvoice = (req: Request, res: Response) => {
    
    const invoiceData = req.body;
    console.log(`> POST invoice ${JSON.stringify(invoiceData)}`);

    const newInvoice = new Invoice(
      Data.nextId(),
      invoiceData.customer_id,
      invoiceData.amount,
      invoiceData.date,
      invoiceData.status
    );
    Data.invoices.set(newInvoice.id, newInvoice);

    res.set("Content-Type", "application/json");
    res.status(201).send(newInvoice.id);
    console.log(`< POST invoice ${JSON.stringify(newInvoice)}`);
    
  }

  /**
   * Updates the invoice with the id given in the path (and redundantly in the body) with 
   * the date from the body.
   * @returns status 200 or 404 (not found)
   */
  static updateInvoice = (req: Request, res: Response) => {
    
    const id = req.params.id;
    const invoiceData = req.body;
    console.log(`> PUT invoice/${id} ${JSON.stringify(invoiceData)}`);

    const invoice = Data.invoices.get(id);
    if (invoice) {
      Data.invoices.set(id, invoiceData);
      res.status(200).send();
      console.log(`< PUT invoice`);
    } else {
      res.status(404).send();
      console.log(`< PUT invoice - id NOT FOUND!`);
    }
    
  }

  /**
   * Deletes the invoice for the id given.
   * @returns status 200 or 404 (not found)
   */
  static deleteInvoice = (req: Request, res: Response) => {
    
    const id = req.params.id;
    console.log(`> DELETE invoice/${id}`);

    const invoice = Data.invoices.get(id);
    if (invoice) {
      Data.invoices.delete(id);
      res.status(200).send();
      console.log(`< DELETE invoice`);
    } else {
      res.status(404).send();
      console.log(`< DELETE invoice - id NOT FOUND!`);
    }
    
  }

  /**
   * Return invoice for id given.
   * @returns Invoice
   */
  static getInvoiceById = (req: Request, res: Response) => {
    
    const id = req.query.id;
    console.log(`> GET /invoice?id=${id}`);

    const invoice = Data.invoices.get(id);
    if (invoice) {
      console.log(`< GET /invoice => ${JSON.stringify(invoice)}`);
      res.set("Content-Type", "application/json");
      res.status(200).send(invoice);
    } else {
      console.log(`< GET /invoices => not found!`);
      res.status(404).send();
    }
    
  }
}