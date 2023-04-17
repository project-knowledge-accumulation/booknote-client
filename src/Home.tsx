import { mockData } from "./Mockdata";
import { useState, useEffect, useContext } from "react";
import { BookNote, BookInfo, noteCollection } from "./globals";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Home.css";
import Body from "./Body";
import AppContext from "./AppContext";

const Home = () => {
  const value = useContext(AppContext);
  const { uId } = value;

  const [bookInfo, setBookInfo] = useState<BookInfo[] | []>([]);
  const [bookTitle, setBookTitle] = useState<string[] | []>([]);
  const [noteCollection, setNoteCollection] = useState<noteCollection[][] | []>(
    []
  );
  const [focusedNote, setFocusedNote] = useState<noteCollection[] | []>([]);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log("Fetching from java with " + uId.current);
    fetchUserData();
  }, []);

  // useEffect(() => {
  //   if (bookInfo[0] === undefined) {
  //     setBookInfo(mockData.bookInfo);
  //   }
  //   if (bookInfo) {
  //     for (const book of bookInfo) {
  //       setBookTitle((current) => [...current, book["title"]]);
  //       setNoteCollection((cur) => [...cur, book["noteCollection"]]);
  //     }
  //   }
  // }, [bookInfo]);

  useEffect(() => {
    if (clickedIndex !== null) {
      setFocusedNote(noteCollection[clickedIndex]);
      console.log("🥑", focusedNote);
    }
  }, [clickedIndex]);

  const fetchUserData = async () => {
    await axios
      .get(`http://localhost:8080/home/${uId.current}`)
      .then((response) => console.log(response.data));
  };
  return (
    <>
      <Sidebar
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
        setClickedIndex={setClickedIndex}
      />
      <div className="Home">
        <Navbar />
        <Body focusedNote={focusedNote} />
      </div>
    </>
  );
};

export default Home;
