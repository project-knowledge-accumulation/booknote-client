import "./Styling/App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect, createContext, useRef } from "react";
import AppContext from "./AppContext";
import classNames from "classnames";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const uId = useRef<string | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // useEffect(() => {
  //   console.log("hello this is from App.ts");
  // }, []);
  const appClassName = isClicked ? "app-dark" : "app-light";

  const conditionalStyles = classNames("App", {
    "bkg-dark": isClicked,
    "bkg-light": !isClicked,
  });

  return (
    <AppContext.Provider
      value={{
        uId: uId,
        isClicked: isClicked,
        setIsClicked: setIsClicked,
      }}
    >
      <BrowserRouter>
        <div className={conditionalStyles}>
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
