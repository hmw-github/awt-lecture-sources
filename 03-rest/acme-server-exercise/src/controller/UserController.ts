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
    // TODO 3 (easy-medium): GET /user?email=<email> -> return the user, status 200 or 404
    // Hints:
    // - The email is a query parameter: `req.query.email`.
    // - `Data.users` uses the email as key, so `Data.users.get(email)` gives you the user or `undefined`.
    // - Use `if (user) { ... } else { ... }` and send exactly one response in each branch.
    // - Remove the placeholder line below once you are done.
    res.status(501).send({ message: 'TODO 3: GET /user not implemented yet' });
  }
}
