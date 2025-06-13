import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatSuggestions from './ChatSuggestions';
import ChatInput from './ChatInput';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello, I am Sentinel, your cybersecurity assistant. How can I help you today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse =async (message) => {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes("password") || lowerMsg.includes("passwords")) {
      return "Strong passwords are critical for security. Consider using a password manager and enabling two-factor authentication wherever possible.";
    } else if (lowerMsg.includes("vpn") || lowerMsg.includes("virtual private network")) {
      return "VPNs encrypt your internet connection, helping protect your data when using public Wi-Fi. However, not all VPNs are created equal - look for no-log policies and strong encryption.";
    } else if (lowerMsg.includes("phishing")) {
      return "Phishing attacks attempt to steal sensitive information by masquerading as trustworthy entities. Always verify the sender and be cautious of unexpected requests for personal information.";
    } else if (lowerMsg.includes("malware") || lowerMsg.includes("virus")) {
      return "To protect against malware: keep your software updated, use reputable antivirus software, avoid suspicious downloads, and be careful when clicking links.";
    } else if (lowerMsg.includes("encryption")) {
      return "Encryption transforms readable data into a coded format that can only be read with the correct key. It's essential for protecting sensitive information during transmission and storage.";
    } else {
      try {
        const res = await fetch("/llm/chatbot/invoke", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            
              input:{
                user_input:lowerMsg
              }
            }
           ),
        });
  
        const data = await res.json();
        console.log(data["output"]);
        return data["output"];
      } catch (error) {
       return "Error: "+error;
      }
    }
  };

  const handleNewMessage = async (newMessage) => {
    setMessages((prev) => [...prev, { type: "user", content: newMessage }]);
    setIsTyping(true);
  
    const botReply = await getBotResponse(newMessage);
    setIsTyping(false);
    setMessages((prev) => [...prev, { type: "bot", content: botReply }]);
  };
  

  const suggestions = [
    "How to create strong passwords?",
    "What is phishing?",
    "How to protect against malware?",
    "Is my connection secure?",
    "What is encryption?",
  ];

  return (
    <>
      {/* Floating button - only shows when chat is closed */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          aria-label="Open chat with Sentinel"
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gray-900 border border-green-500 shadow-lg flex items-center justify-center cursor-pointer z-50 hover:scale-105 transition-transform duration-300"
          style={{ boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)" }}
        >
          <div className="absolute w-full h-full rounded-full animate-pulse opacity-30 bg-green-500"></div>
          <i className="fas fa-shield-alt text-green-500 text-xl"></i>
        </button>
      )}
      
      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 w-[450px] h-[600px] bg-[#0A0A0A] border border-[#00ff9d] rounded-lg shadow-2xl flex flex-col overflow-hidden z-40 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        style={{
          boxShadow: isOpen ? "0 0 30px rgba(0, 255, 157, 0.3)" : "none",
        }}
      >
        {/* Chat header */}
        <div className="h-[70px] px-6 flex items-center justify-between bg-gradient-to-r from-[#0A0A0A] to-[#111111] border-b border-[#00ff9d]/20">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center mr-3 border-2 border-[#00ff9d]">
              <i className="fas fa-shield-alt text-[#00ff9d] text-lg"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Sentinel</h3>
              <div className="flex items-center text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 inline-block"></span>
                Online
              </div>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-gray-400 hover:text-white cursor-pointer"
            aria-label="Close chat"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {/* Chat messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 p-4 overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4a5568 #1a202c",
          }}
        >
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          
          {isTyping && (
            <div className="mb-4 max-w-[85%] mr-auto">
              <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white rounded-bl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-green-500 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-green-500 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>
        
        {/* Suggestion chips */}
        <ChatSuggestions suggestions={suggestions} onSuggestionClick={handleNewMessage} />
        
        {/* Chat input */}
        <ChatInput onSendMessage={handleNewMessage} />
      </div>
    </>
  );
};

export default Chatbot;