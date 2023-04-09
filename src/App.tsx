import React from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
