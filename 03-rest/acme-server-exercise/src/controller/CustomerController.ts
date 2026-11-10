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
        // TODO 1 (easy): GET /customer -> return all customers as a JSON array, status 200
        // Hints:
        // - Customers are stored in `Data.customers` (key = id).
        // - A `Map` serializes to `{}` in JSON, so turn it into an array (`Customer[]`) first.
        // - Optionally log requests and responses with `console.log`. The solution prints
        //   `> GET /customer` / `< GET /customer => ...`.
        // - Remove the placeholder line below once you are done.
        res.status(501).send({ message: 'TODO 1: GET /customer not implemented yet' });
    }
}
