// ChatbotButton.js

import React, { useState } from 'react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '9999',
          backgroundColor: '#0078d4',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
✨ tekAI bot
      </button>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '60px',
            right: '20px',
            zIndex: '9998',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '350px',
            height: '430px',
            backgroundColor: '#fff',
          }}
        >
          <iframe
            style={{ border: 'none', width: '100%', height: '100%' }}
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/b4625184-c872-4d6f-b6fb-5f2829bcff6c"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;
