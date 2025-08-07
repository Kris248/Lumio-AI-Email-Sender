import React, { useState, useRef } from 'react';
import { FaSave, FaTimes, FaPaperPlane } from 'react-icons/fa';

const EmailPreview = ({ 
  emailContent, 
  emailSubject, 
  recipients, 
  isPreviewActive, 
  isEditing, 
  setEmailContent,
  setIsEditing,
  setIsPreviewActive // Add this prop
})  => {
  const [isSending, setIsSending] = useState(false);
  const contentEditableRef = useRef(null);
  
  const handleSaveEdits = () => {
    if (contentEditableRef.current) {
      setEmailContent(contentEditableRef.current.innerHTML);
      setIsEditing(false);
    }
  };
  
  const handleSendEmail = async () => {
    if (!recipients) {
      alert('Please enter recipients');
      return;
    }
    
    const recipientList = recipients.split(',').map(email => email.trim()).filter(email => email);
    if (recipientList.length === 0) {
      alert('Please enter valid email addresses');
      return;
    }
    
    setIsSending(true);
    
    try {
      // Get the current content (if edited)
      const finalContent = isEditing ? contentEditableRef.current.innerHTML : emailContent;
      
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          recipients: recipientList, 
          subject: emailSubject,
          content: finalContent
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      alert('Email sent successfully!');
      // Reset state
      setIsPreviewActive(false);
      setIsEditing(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    } finally {
      setIsSending(false);
    }
  };
  
  return (
    <div id="email-preview" className={`email-preview ${isPreviewActive ? 'active' : ''}`}>
      <div className="email-header">
        <div className="email-subject">{emailSubject}</div>
        <div className="email-meta">To: <span id="preview-recipients">{recipients}</span></div>
      </div>
      <div 
        ref={contentEditableRef}
        className="email-content"
        contentEditable={isEditing}
        dangerouslySetInnerHTML={{ __html: emailContent }}
        style={{
          backgroundColor: isEditing ? 'rgba(108, 99, 255, 0.1)' : '',
          border: isEditing ? '1px solid var(--primary)' : '',
          padding: isEditing ? '20px' : '',
          borderRadius: isEditing ? '10px' : '',
        }}
      />
      
      {isEditing && (
        <div className="button-group" style={{ marginTop: '20px' }}>
          <button 
            className="btn btn-primary"
            onClick={handleSaveEdits}
          >
            <FaSave /> Save Edits
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => {
              // Cancel editing without saving
              if (window.confirm('Discard changes?')) {
                contentEditableRef.current.innerHTML = emailContent; // Reset to original
                setIsEditing(false);
              }
            }}
          >
            <FaTimes /> Cancel
          </button>
        </div>
      )}
      
      {!isEditing && isPreviewActive && (
        <div className="button-group" style={{ marginTop: '20px' }}>
          <button 
            id="send-btn-preview" 
            className="btn btn-success"
            onClick={handleSendEmail}
            disabled={isSending}
          >
            {isSending ? (
              <><i className="fas fa-spinner fa-spin"></i> Sending...</>
            ) : (
              <><FaPaperPlane /> Send Email</>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailPreview;