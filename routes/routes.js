/** @format */

// src/routes.js
const express = require('express');
const router = express.Router();
const { sendContactFormEmail } = require('../controllers/contactController');

// Define your other routes
// router.get('/', (req, res) => {
// 	res.send('Hello, this is the homepage!');
// });

// router.get('/about', (req, res) => {
// 	res.send('This is the about page.');
// });
// router.get('/contact', (req, res) => {
// 	res.send('Show the contact form');
// });

router.post('/contact', sendContactFormEmail);

module.exports = router;
