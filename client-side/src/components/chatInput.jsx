import { Input } from "@material-ui/core";
import React, { useState } from "react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <>
      <form onSubmit={(event) => sendChat(event)}>
        <Input
          type="text"
          placeholder="type your message"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
      </form>
    </>
  );
};