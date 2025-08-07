# Lumio AI Email Sender ✨
## Developer: Krish Gautam 🙋‍♂️

<br>

## Revolutionize Your Email Workflow with AI 💌

Lumio AI Email Sender is a cutting-edge MERN stack application that transforms how you create and send emails. Leverage the power of Groq's lightning-fast AI to generate professional emails in seconds, then send them directly to recipients with a polished interface.

## ✨ Key Features

- **AI-Powered Email Generation** - Create professional emails in seconds using Groq's advanced language models
- **Intuitive Editor** - Edit AI-generated content before sending
- **Batch Sending** - Send to multiple recipients simultaneously
- **Modern UI** - Sleek dark theme with glassmorphism effects
- **Responsive Design** - Works flawlessly on desktop and mobile
- **Email Preview** - See exactly what your email will look like before sending
- **Secure** - Protected API keys and credentials using environment variables

## 🚀 Technologies Used

| Category       | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| **Frontend**   | React, React Icons, CSS3 (Glassmorphism, Gradients)                          |
| **Backend**    | Node.js, Express.js, Groq SDK                                                |
| **Email**      | Nodemailer (with Gmail or Ethereal testing)                                  |
| **Environment**| Dotenv, Git                                                                  |

## 🛠 Setup and Installation

Follow these steps to get Lumio AI Email Sender running on your local machine:

### Prerequisites
- Node.js (v16+)
- npm (v8+)
- Groq API Key (free at [Groq Cloud](https://console.groq.com/))
- Gmail account (optional for email sending)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/lumio-ai-email-sender.git
cd lumio-ai-email-sender
```

### 2. Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `server` directory with the following:

```env
PORT=5000
GROQ_API_KEY=your_groq_api_key_here

# For Gmail sending (recommended for production)
EMAIL_USER=your@gmail.com
EMAIL_PASSWORD=your_app_password_here

# OR for Ethereal testing (recommended for development)
# (No email credentials needed)
```

### 4. Start the Application

Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm start
```

### 5. Access the Application
Visit `http://localhost:3000` in your browser to start using Lumio AI Email Sender!

## 🔒 Configuring Email Sending

### Option 1: Ethereal (Testing - Recommended for Development)
1. No configuration needed!
2. After sending emails, check your Ethereal inbox at the URL provided in the response
3. View sent emails without actually delivering them

### Option 2: Gmail (Production)
1. Enable 2-Step Verification on your Google Account
2. Create an App Password:
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom Name)"
   - Name it "Lumio AI" and generate
3. Use the 16-digit app password in your `.env` file
4. Emails will be sent from your Gmail account

## 🎯 Using Lumio AI Email Sender

1. **Enter Recipients**
   - Add email addresses separated by commas
   
2. **Describe Your Email**
   - Write a prompt describing the email you want to send
   - Example: "Write a follow-up email to a client about our new product launch"

3. **Generate Email**
   - Click "Generate Email" to create content using AI
   - Wait a few seconds for the AI to work its magic

4. **Review and Edit**
   - Preview the generated email
   - Click "Edit Email" to make adjustments
   - Save your edits when finished

5. **Send Emails**
   - Click "Send Email" to deliver to all recipients
   - Get confirmation when emails are successfully sent

## 📂 Project Structure

```
lumio-ai-email-sender/
├── client/              # React frontend
│   ├── public/          # Static assets
│   ├── src/             # React components
│   └── ...              # Client configuration
├── server/              # Express backend
│   ├── controllers/     # Business logic
│   ├── routes/          # API endpoints
│   └── ...              # Server configuration
├── .gitignore           # Git ignore rules
└── README.md            # This documentation
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Transform your email workflow today with Lumio AI Email Sender!** ✉️✨




<img width="1700" height="2261" alt="image" src="https://github.com/user-attachments/assets/09633bdb-5ac7-456c-adc3-55fdb0c106f1" />


