import React from 'react';
import { Button } from 'antd';
import WhatsApp from '../../assets/WhatsApp.png';
import './style.css'; 

const WhatsAppFloating = () => {
  return (
    <>
     <Button
      className="whatsapp-floating-button"
      onClick={() => alert('WhatsApp clicked!')}
    >
      <img
        src={WhatsApp}
        alt="WhatsApp Icon"
        className="whatsapp-icon"
      />
    </Button>
    </>
   
  );
};

export default WhatsAppFloating;
