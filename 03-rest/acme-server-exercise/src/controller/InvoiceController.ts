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
    // TODO
  }

  /**
   * Creates a new invoice from the data in the body.
   * @returns id of new invoice
   */
  static createInvoice = (req: Request, res: Response) => {
    // TODO
  }

  /**
   * Updates the invoice with the id given in the path (and redundantly in the body) with 
   * the date from the body.
   * @returns status 200 or 404 (not found)
   */
  static updateInvoice = (req: Request, res: Response) => {
    // TODO
  }

  /**
   * Deletes the invoice for the id given.
   * @returns status 200 or 404 (not found)
   */
  static deleteInvoice = (req: Request, res: Response) => {
    // TODO
  }

  /**
   * Return invoice for id given.
   * @returns Invoice
   */
  static getInvoiceById = (req: Request, res: Response) => {
    // TODO
  }
}