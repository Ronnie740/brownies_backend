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
	const { email, phone, company, name, message } = req.body;
	// console.log('Email sent\n\n', email, '\n\n');
	// console.log('Phone sent\n\n', phone, '\n\n');
	// console.log('Company sent\n\n', company, '\n\n');
	// console.log('Name sent\n\n', name, '\n\n');
	// console.log('Message sent\n\n', message, '\n\n');
	const smtpTransport = nodemailer.createTransport({
		host: 'smtp-relay.brevo.com',
		port: 587,
		secure: false,
		auth: {
			user: process.env.API_USER,
			pass: process.env.API_PASSWORD,
		},
	});

	const subject = `New Brownies Website message from ${name}`;
	const mailOptions = {
		from: email,
		// to: 'recipient@example.com', // Replace with the recipient's email
		to: 'peyivix781@lanxi8.com', // Replace with the recipient's email
		subject: subject,
		text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}`,
	};

	try {
		await smtpTransport.sendMail(mailOptions);
		console.log('Email sent successfully');
		res.status(200).json({ success: true, message: 'Email sent successfully' });
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).json({ success: false, message: 'Error sending email' });
	}
}

module.exports = { sendContactFormEmail };

// module.exports = router;
