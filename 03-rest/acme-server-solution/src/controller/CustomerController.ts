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
        
        console.log(`> GET /customer`);

        const result: Customer[] = [];
        Data.customers.forEach(customer => {
            result.push(customer);
        });

        console.log(`< GET /customer => ${JSON.stringify(result)}`);
        res.set('Content-Type', 'application/json');
        res.status(200).send(result);
        
    }
}