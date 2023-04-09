import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="Home">
        <Navbar />
      </div>
    </>
  );
};

export default Home;
