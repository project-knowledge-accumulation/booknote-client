import "../Styling/Sidebar.css";
import Button from "@mui/material/Button";
import { BookInfo } from "../globals";
import { useEffect, useState, useRef } from "react";
import AddPrompt from "./AddPrompt";

interface SidebarProps {
  bookTitle: string[];
  isLoading: boolean;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setBookTitle: React.Dispatch<React.SetStateAction<string[]>>;
  setClickedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Sidebar = (props: SidebarProps) => {
  const { bookTitle, setBookTitle, setClickedIndex, isClicked, setIsClicked } = props;
  const [name, setName] = useState<string>("");

  const listBookTitle = bookTitle.map((title, index) => {
    return (
      <li key={index} onClick={() => setClickedIndex(index)}>
        {title}
      </li>
    );
  });

  const showBook = () => {
    setIsClicked(true);
  };
  return (
    <>
      <div className="Sidebar">
        <div className="side-title">
          <h2>Book List</h2>
          <Button variant="outlined" onClick={showBook}>
            Add Book
          </Button>
        </div>
        <h3>{name}</h3>
        <div className="book-title">
          {bookTitle.length > 0 ? <ul>{listBookTitle}</ul> : "No books yet!!"}
        </div>
        {!isClicked ? "" : <AddPrompt bookTitle={bookTitle}
        setBookTitle={setBookTitle} setClickedIndex={setClickedIndex} setIsClicked={setIsClicked}/>}
      </div>
    </>
  );
};

export default Sidebar;
