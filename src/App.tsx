import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect, createContext, useRef } from "react";
import AppContext from "./AppContext";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const uId = useRef<string | null>(null);
  // useEffect(() => {
  //   console.log("hello this is from App.ts");
  // }, []);

  return (
    <AppContext.Provider value={{
      uId: uId
    }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
