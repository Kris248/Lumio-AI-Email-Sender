import React, { useState } from "react";
import Header from "./components/Header";
import EmailForm from "./components/EmailForm";
import EmailPreview from "./components/EmailPreview";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [emailSubject, setEmailSubject] = useState(
    "Subject: Follow-up Regarding Our Meeting"
  );
  const [recipients, setRecipients] = useState("");
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="tagline">
          <strong>Lumio AI Email Sender</strong> - Create professional emails in
          seconds with AI
        </h1>

        <div className="card">
          <EmailForm
            setEmailContent={setEmailContent}
            setEmailSubject={setEmailSubject}
            recipients={recipients}
            setRecipients={setRecipients}
            isPreviewActive={isPreviewActive} // Add this prop
            setIsPreviewActive={setIsPreviewActive}
            setIsEditing={setIsEditing}
          />

          <EmailPreview
            emailContent={emailContent}
            emailSubject={emailSubject}
            recipients={recipients}
            isPreviewActive={isPreviewActive}
            isEditing={isEditing}
            setEmailContent={setEmailContent}
            setIsEditing={setIsEditing}
            setIsPreviewActive={setIsPreviewActive} // Add this prop
          />
        </div>

        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;
