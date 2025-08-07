const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  try {
    const { recipients, subject, content } = req.body;
    
    // Create test account with Ethereal
    const testAccount = await nodemailer.createTestAccount();
    
    // Create reusable transporter using test account
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: 'selena.blick@ethereal.email',
        pass: 'RtB4N1UZaUQ9efrxNU',
      }
    });

    // Send email to each recipient
    const results = [];
    for (const recipient of recipients) {
      const info = await transporter.sendMail({
        from: `"Lumio AI" <${testAccount.user}>`,
        to: recipient,
        subject: subject,
        html: content
      });
      
      results.push({
        recipient,
        previewUrl: nodemailer.getTestMessageUrl(info)
      });
    }

    res.json({ 
      message: 'Emails sent successfully',
      results 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
};