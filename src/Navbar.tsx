import "./Navbar.css";
import { mockData } from "./Mockdata";
import { useState, useEffect } from "react";
import { BookNote, BookInfo } from "./globals";
import axios from "axios";


const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <h1>BookNotes</h1>
        <img
          src="https://cdn.pixabay.com/animation/2022/12/05/05/08/05-08-32-681_512.gif"
          alt="gif on a book flipping"
          className="gif"
        />
      </div>
    </>
  );
};

export default Navbar;
