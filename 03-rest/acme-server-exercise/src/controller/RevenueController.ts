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
    // TODO 2 (easy): GET /revenue -> return all revenues as a JSON array, status 200
    // Hints:
    // - Same as TODO 1, but for `Data.revenues` (key = month).
    // - Remove the placeholder line below once you are done.
    res.status(501).send({ message: 'TODO 2: GET /revenue not implemented yet' });
  }
}
