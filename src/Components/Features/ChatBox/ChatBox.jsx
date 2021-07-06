

import React,{useEffect} from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function ChatBox() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    addResponseMessage("bla bla bla ");
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage} 
      />
    </div>
  );
}

export default ChatBox;
