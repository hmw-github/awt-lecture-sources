import { Request, Response } from 'express';
import { Data } from '../database/Data';

/**
 * Controller module providing endpoints for user data.
 */

export class UserController {
  /**
   * Return user data for the email given.
   * @returns User
   */
  static getUser = (req: Request, res: Response) => {
    // TODO
  }
}