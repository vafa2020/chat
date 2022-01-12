import React, { useState, useEffect } from "react";
import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm/MessageForm";
import "./App.css";

function App() {
  const [listMassege, setListMessage] = useState([]);

  const onMessageSend = (textMessage) => {
    if (textMessage === "") {
      return null;
    }
    fetch(`http://localhost:3001/message/${textMessage}`)
      .then((res) => res.json())
      .then((data) =>
        setListMessage((listMassege) => [...listMassege, { textServer: data.message, user: false }])
      )
      .catch((err) => console.log(err));

    setListMessage([...listMassege, { textUser: textMessage, user: true }]);
  };

  return (
    <div className="App">
      <MessageList messages={listMassege} />
      <MessageForm onMessageSend={onMessageSend} />
    </div>
  );
}

export default App;
