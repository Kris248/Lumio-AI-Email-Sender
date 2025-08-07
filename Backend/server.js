require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
const corsOptions = {
  origin: [
    "http://localhost:5000", // For local dev
    "https://lumio-ai-email-sender.netlify.app", // Your Netlify frontend
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Lumio Backend</title></head>
      <body>
        <h1>✅ Lumio Backend is Live</h1>
        <p>Server running on port ${PORT}</p>
      </body>
    </html>
  `);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});