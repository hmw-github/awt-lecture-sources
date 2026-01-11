import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { defineRoutes } from './routes';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

// use body parser for processing of JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
    res.send('The order server is up and running!');
});
defineRoutes(app);

const port = process.env.PORT || 8080; // Use the port from .env or default to 8080
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});