import React, { useState } from "react";
import { FaBolt, FaEdit, FaPaperPlane } from "react-icons/fa";

const EmailForm = ({
  setEmailContent,
  setEmailSubject,
  recipients,
  setRecipients,
  isPreviewActive, // Add this
  setIsPreviewActive,
  setIsEditing,
}) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || !recipients.trim()) {
      alert("Please enter both recipients and a prompt");
      return;
    }

    setIsGenerating(true);

    try {
      const response = await fetch(
        `${
          process.env.REACT_APP_API_URL || "https://lumio-ai-email-sender.onrender.com"
        }/api/generate-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate email");
      }

      const data = await response.json();
      setEmailContent(data.emailContent);
      setIsPreviewActive(true);
      setIsEditing(false); // Reset editing state
    } catch (error) {
      console.error("Error:", error);
      alert("Error generating email");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className="section-title">
        <i className="fas fa-users"></i>
        <h2>Recipient Email Addresses</h2>
      </div>

      <div className="input-group">
        <label className="input-label">
          Enter email addresses (separated by commas)
        </label>
        <input
          type="text"
          className="input-field"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          placeholder="e.g., john@example.com, jane@company.com"
        />
      </div>

      <div className="section-title">
        <i className="fas fa-comment-dots"></i>
        <h2>Email Prompt</h2>
      </div>

      <div className="input-group">
        <label className="input-label">
          Describe the email you want to send
        </label>
        <textarea
          className="input-field"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          placeholder="e.g., 'Write a follow-up email to a client about our new product features launching next month'"
        />
      </div>

      <div className="button-group">
        <button
          id="generate-btn"
          className={`btn btn-primary ${!isGenerating ? "pulse" : ""}`}
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Generating...
            </>
          ) : (
            <>
              <FaBolt /> Generate Email
            </>
          )}
        </button>
        <button
          id="edit-btn"
          className="btn btn-secondary"
          disabled={!isPreviewActive || isGenerating} // Use prop here
          onClick={() => setIsEditing(true)}
        >
          <FaEdit /> Edit Email
        </button>
        <button
          id="send-btn"
          className="btn btn-success"
          disabled={!isPreviewActive || isGenerating} // And here
        >
          <FaPaperPlane /> Send Email
        </button>
      </div>
    </>
  );
};

export default EmailForm;
