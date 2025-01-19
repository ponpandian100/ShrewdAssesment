import React from 'react';
import { Button } from 'antd';
import Chat from '../../assets/Chat.png';
import './style.css';

const ChatFloating = () => {
  return (
    <Button
      className="chat-floating-button"
      onClick={() => alert('Chat clicked!')}
    >
      <p>Need Help? <span className="text-danger">Chat with Us &nbsp;</span></p>
      
      <img
        src={Chat}
        alt="Chat Icon"
        className="chat-icon"
      />
    </Button>
  );
};

export default ChatFloating;
