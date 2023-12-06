/** @format */

// src/contactForm.js
const nodemailer = require('nodemailer');
require('dotenv').config();

// Handle GET request to show the contact form
// router.get('/contact', (req, res) => {
// 	res.send('Show the contact form');
// });

// Handle POST request when the form is submitted
// router.post('/contact', async (req, res) => {
// 	// Replace these values with your email configuration
// 	const smtpTransport = nodemailer.createTransport({
// 		service: 'Gmail',
// 		auth: {
// 			user: process.env.EMAIL_USER,
// 			pass: process.env.EMAIL_PASSWORD,
// 		},
// 	});

// 	// Extract form data from the request body
// 	const { name, email, phoneNumber, message } = req.body;

// 	// Create email content
// 	const mailOptions = {
// 		from: email,
// 		to: 'recipient@example.com', // Replace with the recipient's email
// 		subject: 'New Contact Form Submission',
// 		text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
// 	};

// 	try {
// 		// Send the email
// 		await smtpTransport.sendMail(mailOptions);
// 		console.log('Email sent successfully');
// 		res.send('Form submitted successfully');
// 	} catch (error) {
// 		console.error('Error sending email:', error);
// 		res.status(500).send('Internal Server Error');
// 	}
// });

async function sendContactFormEmail(req, res) {
	const { email, phoneNumber, company, name, message } = req.body;
	console.log('Email sent\n\n', email, '\n\n');
	const smtpTransport = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: email,
		// to: 'recipient@example.com', // Replace with the recipient's email
		to: 'peyivix781@lanxi8.com', // Replace with the recipient's email
		subject: 'New Contact Form Submission',
		text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
	};

	try {
		await smtpTransport.sendMail(mailOptions);
		console.log('Email sent successfully');
		return true;
	} catch (error) {
		console.error('Error sending email:', error);
		return false;
	}
}

module.exports = { sendContactFormEmail };

// module.exports = router;
