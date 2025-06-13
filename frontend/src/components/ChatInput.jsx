import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = async() => {
    if (inputValue.trim() === '') return;
    onSendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="h-[70px] p-4 bg-[#111111] border-t border-[#00ff9d]/20 flex items-center gap-2">
      <input
        id="chat-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Ask Sentinel about security..."
        className="flex-1 bg-[#0A0A0A] border-2 border-[#00ff9d]/30 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 text-sm"
        style={{ height: "45px" }}
      />
      <button
        onClick={sendMessage}
        className="bg-[#00ff9d] hover:bg-[#00ff9d]/90 text-black font-medium rounded-lg px-6 h-[45px] flex items-center justify-center cursor-pointer transition-all duration-200 !rounded-button whitespace-nowrap hover:shadow-[0_0_15px_rgba(0,255,157,0.5)]"
      >
        <i className="fas fa-paper-plane mr-2"></i>
        Send
      </button>
    </div>
  );
};

export default ChatInput;