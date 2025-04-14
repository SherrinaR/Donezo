import React, { useState } from "react";
import "./Chatbot.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! How can I help you today? 😊" },
  ]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = () => {
    if (userInput.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    // Simulate AI response
    setTimeout(() => {
      const botReply: Message = {
        sender: "bot",
        text: "Got it! I'll track that goal for you. ✅",
      };
      setMessages([...newMessages, botReply]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Donezo</div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
