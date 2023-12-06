/** @format */

// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors'); // Import the cors middleware
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use cors middleware to handle CORS headers
app.use(cors());
app.use('/', routes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
