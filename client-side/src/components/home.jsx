import React, { useState, useEffect } from "react";

export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
      <div>
        <h1>
            Welcome, <span>{userName}!</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>
     
  );
}