import express from 'express';
import { defineRoutes } from './routes';
import bodyParser from 'body-parser';
import { exit } from 'process';
import * as dotenv from 'dotenv';
import { Data } from './database/Data';

dotenv.config(); // load ".env" file
// read .env file with configuration variables
require('dotenv').config();

//Create an app
const app = express();

// use body parser for processing of JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// add routes
defineRoutes(app);

// initialize "database"
Data.initialize();

//Listen to port
if (!process.env.PORT) {
    console.log('PORT not specified in .env file!');
    exit(-1);
}
const PORT = process.env.PORT;
app.listen(PORT);

console.log(`Running on port ${PORT}`);