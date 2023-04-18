import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AppContext from "../AppContext";
import axios from "axios";

const Login = () => {
  const value = useContext(AppContext);
  const { uId } = value;
  const navigate = useNavigate();

  const fetchUser = () => {
    uId.current = "12uagre";
    navigate("/home");
  };

  return (
    <>
      <button onClick={fetchUser}>Go to the home page!</button>
      <h1>This is Loginiiiiii</h1>
    </>
  );
};

export default Login;
