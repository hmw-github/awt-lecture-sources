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
    // TODO 8 (hard): GET /invoice/latest/:limit -> InvoiceForCustomer[] sorted by date, newest first
    // Hints:
    // - `const limit = Number(req.params.limit);` (path parameters are always strings).
    // - Step 1, join: for each invoice in `Data.invoices`, look up
    //   `Data.customers.get(invoice.customer_id)` and create
    //   `new InvoiceForCustomer(invoice.id, customer.name, customer.image_url, customer.email,
    //                           invoice.date, invoice.amount, invoice.status)`.
    //   Watch the parameter order in `src/models/InvoiceForCustomer.ts`.
    // - Step 2, sort descending by date:
    //   `result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());`
    // - Step 3, limit: `if (limit > 0) result = result.slice(0, limit);`
    // - Remove the placeholder line below once you are done.
    res.status(501).send({ message: 'TODO 8: GET /invoice/latest/:limit not implemented yet' });
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
    // TODO 9 (hardest): GET /invoice/filtered?query=<string>&currentPage=<int>
    // Hints:
    // - Two query parameters:
    //     const query = (req.query.query as string).trim().toLowerCase();
    //     const currentPage = Number(req.query.currentPage);
    // - Step 1, join and filter: same join as TODO 8, but only keep entries where `query` is empty
    //   or `value.toString().toLowerCase().includes(query)`.
    //   `InvoiceForCustomer.toString()` concatenates name, email, date, amount and status.
    // - Step 2, sort: same as TODO 8. Sort before paging, otherwise the pages are random.
    // - Step 3, paging (only if `currentPage != -1`):
    //     const offset = (currentPage - 1) * InvoiceController.ITEMS_PER_PAGE;
    //     result = result.slice(offset, offset + InvoiceController.ITEMS_PER_PAGE);
    // - Remove the placeholder line below once you are done.
    res.status(501).send({ message: 'TODO 9: GET /invoice/filtered not implemented yet' });
  }

  /**
   * Creates a new invoice from the data in the body.
   * @returns id of new invoice
   */
  static createInvoice = (req: Request, res: Response) => {
    // TODO 6 (medium): POST /invoice -> create a new invoice, status 201, response body = new id
    // Hints:
    // - `const data = req.body;` The body contains `customer_id`, `amount`, `date` and `status`,
    //   but no id.
    // - Generate the id with `Data.nextId()`.
    // - `const invoice = new Invoice(id, data.customer_id, data.amount, data.date, data.status);`
    // - Store it: `Data.invoices.set(id, invoice);`
    // - `res.status(201).send(id);`
    // - Remove the placeholder line below once you are done.
    res.status(501).send({ message: 'TODO 6: POST /invoice not implemented yet' });
  }

  /**
   * Updates the invoice with the id given in the path (and redundantly in the body) with
   * the date from the body.
   * @returns status 200 or 404 (not found)
   */
  static updateInvoice = (req: Request, res: Response) => {
    // TODO 7 (medium): PUT /invoice/:id -> replace the invoice, status 200 or 404
    // Hints:
    // - Combines TODO 5 (path parameter `req.params.id`) and TODO 6 (`req.body`).
    // - Check that the invoice exists before you overwrite it. A PUT on an unknown id must not
    //   create anything here.
    // - `Data.invoices.set(id, req.body);`
    // - Remove the placeholder line below once you are done.
    res.status(501).send({ message: 'TODO 7: PUT /invoice/:id not implemented yet' });
  }

  /**
   * Deletes the invoice for the id given.
   * @returns status 200 or 404 (not found)
   */
  static deleteInvoice = (req: Request, res: Response) => {
    // TODO 5 (easy-medium): DELETE /invoice/:id -> delete the invoice, status 200 or 404
    // Hints:
    // - New: the id is a path parameter (`:id` in `routes.ts`), so use `req.params.id`,
    //   not `req.query.id`.
    // - `Data.invoices.has(id)` / `Data.invoices.delete(id)`.
    // - Without a body, still finish the response with `res.status(200).send()`.
    // - Remove the placeholder line below once you are done.
    res.status(501).send({ message: 'TODO 5: DELETE /invoice/:id not implemented yet' });
  }

  /**
   * Return invoice for id given.
   * @returns Invoice
   */
  static getInvoiceById = (req: Request, res: Response) => {
    // TODO 4 (easy-medium): GET /invoice?id=<id> -> return the invoice, status 200 or 404
    // Hints:
    // - Same pattern as TODO 3, with `req.query.id` and `Data.invoices`.
    // - Invoice ids are generated at server start (`Data.nextId()` is based on `Date.now()`),
    //   so the `@ID` in `tests.http` is probably not valid. Getting a `404` is the correct answer
    //   for now. You can test the `200` case after TODO 6.
    // - Remove the placeholder line below once you are done.
    res.status(501).send({ message: 'TODO 4: GET /invoice?id= not implemented yet' });
  }
}
