import express, { Request, Response } from 'express';
import { defineRoutes } from './routes';
import bodyParser from 'body-parser';

import * as dotenv from 'dotenv';
dotenv.config(); // load ".env" file

const app = express();

// use body parser for processing of JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// define non-API "alive" route here
app.get('/', (req: Request, res: Response) => {
    res.send('The order server is up and running!');
});

defineRoutes(app);

const port = process.env.PORT || 3000; // Use the port from .env or default to 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});