import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  // useEffect(() => {
  //   console.log("hello this is from App.ts");
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
