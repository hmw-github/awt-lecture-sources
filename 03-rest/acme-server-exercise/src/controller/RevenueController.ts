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
    // TODO
  }
}