const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

exports.generateEmail = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an expert email writer. Write a professional email based on the user prompt. Only provide the email body, do not include subject or other fields unless explicitly asked. Format the email in HTML with paragraphs and line breaks. Do not add any extra text or explanations."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama3-70b-8192"
    });

    const emailContent = chatCompletion.choices[0]?.message?.content || '';
    res.json({ emailContent });
    
  } catch (error) {
    console.error('Error generating email:', error);
    res.status(500).json({ error: 'Failed to generate email' });
  }
};