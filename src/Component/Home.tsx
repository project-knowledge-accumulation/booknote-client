import { mockData } from "./Mockdata";
import { useState, useEffect, useContext, useRef } from "react";
import { BookNote, BookInfo, noteCollection } from "../globals";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../Styling/Home.css";
import Body from "./Body";
import AppContext from "../AppContext";

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
  const mounted = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const bookRef = useRef<BookInfo[] | []>([]);

  useEffect(() => {
    if (mounted.current === false) {
      console.log("This is fetching user.")
      fetchUserData();
      mounted.current = true;
    }
  }, []);

  //mock data for when fetching is troublesome.
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
    //await axios.get(`http://localhost:8080/home/${uId.current}`)
    await axios.get(`http://localhost:8080/home/12uagre`).then((response) => {
      console.log(response.data);
      if (bookInfo[0] === undefined) {
        setBookInfo(response.data.bookInfo);
        bookRef.current = response.data.bookInfo;
      }
      if (bookInfo) {
        setBookTitle((current) => [
          ...current,
          ...response.data.bookInfo.map((book: any) => book["title"]),
        ]);
        setNoteCollection((cur) => [
          ...cur,
          ...response.data.bookInfo.map((book: any) => book["noteCollection"]),
        ]);
      }
    });
  };

  return (
    <>
      <Sidebar
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
        setClickedIndex={setClickedIndex}
        isLoading={isLoading}
      />
      <div className="Home">
        <Navbar />
        <Body focusedNote={focusedNote} />
      </div>
    </>
  );
};

export default Home;
