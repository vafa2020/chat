import React from 'react';
import './Message.css';

function Message({ user,
   body }) {
 
  return <div className={`message ${user ? 'me' : 'other'}`}>{body}</div>;
}

export default Message;
