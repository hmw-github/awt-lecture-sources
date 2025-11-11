import express, { Request, Response } from 'express';
import { UserController } from './controller/userController';
import { CustomerController } from './controller/customerController';
import { RevenueController } from './controller/revenueController';
import { InvoiceController } from './controller/invoiceController';

export const defineRoutes = (app: express.Express) => {
    app.get('/user', (req: Request, res: Response) => UserController.getUser(req, res));
    app.get('/customer', (req: Request, res: Response) => CustomerController.getCustomers(req, res));
    app.get('/revenue', (req: Request, res: Response) => RevenueController.getRevenues(req, res));
    app.get('/invoice', (req: Request, res: Response) => InvoiceController.getInvoiceById(req, res));
    app.get('/invoice/filtered', (req: Request, res: Response) => InvoiceController.getFilteredInvoices(req, res));
    app.get('/invoice/latest/:limit', (req: Request, res: Response) => InvoiceController.getLatestInvoices(req, res));
    app.post('/invoice', (req: Request, res: Response) => InvoiceController.createInvoice(req, res));
    app.put('/invoice/:id', (req: Request, res: Response) => InvoiceController.updateInvoice(req, res));
    app.delete('/invoice/:id', (req: Request, res: Response) => InvoiceController.deleteInvoice(req, res));
};