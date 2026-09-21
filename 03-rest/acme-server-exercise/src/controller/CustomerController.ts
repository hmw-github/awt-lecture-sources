import { Request, Response } from 'express';
import { Data } from "../database/Data";
import { Customer } from "../models/Customer";

/**
 * Controller module providing endpoints for customer data.
 */
export class CustomerController {
    /**
     * Return all customers.
     * @returns Customer[]
     */
    static getCustomers = (req: Request, res: Response) => {
        // TODO
    }
}