// src/pages/ChatbotPage.tsx

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputText.trim() === '') return;

    // Add user message to the chat
    const userMessage: Message = {
      sender: 'user',
      text: inputText,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      // Replace this with your actual API call to get the bot response
      const botResponse = await getBotResponse(inputText);

      const botMessage: Message = {
        sender: 'bot',
        text: botResponse,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  // Mock function to simulate bot response
  const getBotResponse = async (userInput: string): Promise<string> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        // Simple mock responses based on user input
        let response = "I'm sorry, I didn't understand that.";

        if (userInput.toLowerCase().includes('gym timings')) {
          response = 'Our gym is open from 6 AM to 10 PM, Monday through Saturday.';
        } else if (userInput.toLowerCase().includes('membership fees')) {
          response = 'Our membership fees start at $50 per month.';
        } else if (userInput.toLowerCase().includes('thank you')) {
          response = "You're welcome! Let me know if you have any other questions.";
        } else if (userInput.toLowerCase().includes('hi') || userInput.toLowerCase().includes('hello')) {
          response = 'Hello! How can I assist you today?';
        }

        resolve(response);
      }, 1000),
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 font-nunito">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        AI Chatbot
      </h1>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-md flex flex-col h-[500px]">
        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-lg p-2 max-w-xs ${
                  message.sender === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-300">
          <div className="flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              placeholder="Type your message..."
              disabled={loading}
            />
            <button
              type="submit"
              className="ml-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatbotPage;
