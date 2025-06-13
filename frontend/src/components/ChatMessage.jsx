import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className={`mb-4 max-w-[85%] ${message.type === "user" ? "ml-auto" : "mr-auto"}`}>
      <div
        className={`p-3 rounded-lg ${
          message.type === "user"
            ? "bg-gray-800 text-white rounded-br-none"
            : "bg-gray-800 border border-gray-700 text-white rounded-bl-none"
        }`}
        style={{
          boxShadow: message.type === "bot" ? "0 0 10px rgba(0, 255, 0, 0.1)" : "none",
        }}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;