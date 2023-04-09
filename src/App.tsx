import React from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
