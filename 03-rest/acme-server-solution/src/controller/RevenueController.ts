import { Request, Response } from "express";
import { Revenue } from "../models/Revenue";
import { Data } from "../database/Data";

/**
 * Controller module providing endpoints for revenue data.
 */
export class RevenueController {
  /**
   * Return all revenue data.
   * @returns Revenue[]
   */
  static getRevenues = (req: Request, res: Response) => {
    
    console.log(`> GET /revenue`);

    const result: Revenue[] = [];

    Data.revenues.forEach((value) => {
      result.push(value);
    });

    console.log(`< GET /revenue => ${JSON.stringify(result)}`);
    res.set("Content-Type", "application/json");
    res.status(200).send(result);
    
  }
}