import { mockData } from "./Mockdata";
import { useState, useEffect } from "react";
import { BookNote, BookInfo } from "./globals";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Home.css";
import Body from "./Body";

const Home = () => {
  const [bookInfo, setBookInfo] = useState<BookInfo[] | []>([]);
  const [bookTitle, setBookTitle] = useState<string[] | []>([]);

  useEffect(() => {
    if (bookInfo[0] === undefined) {
      setBookInfo(mockData.bookInfo);
    }
    console.log(bookInfo);
    if (bookInfo) {
      for (const book of bookInfo) {
        setBookTitle((current) => [...current, book["title"]]);
      }
    }
    console.log("🐕", bookTitle);
  }, [bookInfo]);

  return (
    <>
      <Sidebar bookTitle={bookTitle} setBookTitle={setBookTitle} />
      <div className="Home">
        <Navbar />
        <Body />
      </div>
    </>
  );
};

export default Home;
