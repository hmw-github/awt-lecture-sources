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
    
    console.log(`> GET /user?email=${req.query.email}`);

    const user = Data.users.get(req.query.email);
    if (user) {
        console.log(`< GET /user => ${JSON.stringify(user)}`);
        res.set('Content-Type', 'application/json');
        res.status(200).send(user);    
    } else {
        console.log(`< GET /user => not found!`);
        res.set('Content-Type', 'application/json');
        res.status(404).send({});    
    }
    
  }
}