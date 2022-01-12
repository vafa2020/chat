import React, { useRef, useEffect, useState } from "react";
import "./MessageForm.css";

function MessageForm({ onMessageSend }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  function handleFormSubmit(event) {
    event.preventDefault();
    onMessageSend(input);
    setInput("");
  }
  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          ref={inputRef}
          value={input}
          onChange={changeHandler}
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
