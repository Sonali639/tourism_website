import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatInterface.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchBotResponse = async (message) => {
    try {
      setIsLoading(true);

      const response = await axios.post('http://localhost:8000/api/chat-messages/', { content: message });
      const botMessage = {
        content: response.data.message,
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const userMessage = {
      content: inputValue,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    fetchBotResponse(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
    
   
    <div className="chat-interface" style={{'background-color':"#C2E5CB"}}>
      <div className="chat-interface-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message message-${message.sender}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="chat-interface-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      {isLoading && <div className="loading-animation"></div>}
    </div>
    </>
  );
};

export default ChatInterface;
