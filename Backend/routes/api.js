const express = require('express');
const router = express.Router();
const { generateEmail } = require('../controllers/groqController');
const { sendEmail } = require('../controllers/emailController');

// Generate email with AI
router.post('/generate-email', generateEmail);

// Send email
router.post('/send-email', sendEmail);

module.exports = router;