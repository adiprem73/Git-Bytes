import React from 'react';

const ChatSuggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="px-4 py-3 bg-[#111111] border-t border-[#00ff9d]/20 overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-4 py-2 text-sm bg-[#0A0A0A] hover:bg-[#00ff9d]/10 text-[#00ff9d] rounded-full cursor-pointer whitespace-nowrap border border-[#00ff9d]/30 hover:border-[#00ff9d] transition-all duration-200"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSuggestions;