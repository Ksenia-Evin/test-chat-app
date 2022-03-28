import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../src/pages/login/login";
import Chat from "../src/pages/chat/chat";
import Register from "../src/pages/login/register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}