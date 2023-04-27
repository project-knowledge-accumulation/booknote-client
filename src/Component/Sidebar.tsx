import "../Styling/Sidebar.css";
import Button from "@mui/material/Button";
import { BookInfo } from "../globals";
import { useEffect, useState, useRef } from "react";
import AddPrompt from "./AddPrompt";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface SidebarProps {
  bookTitle: string[];
  isLoading: boolean;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setBookTitle: React.Dispatch<React.SetStateAction<string[]>>;
  setClickedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Sidebar = (props: SidebarProps) => {
  const { bookTitle, setBookTitle, setClickedIndex, isClicked, setIsClicked } =
    props;
  const [name, setName] = useState<string>("");
  const [isDark, setIsDark] = useState(false);

  const listBookTitle = bookTitle.map((title, index) => {
    return (
      <li key={index} onClick={() => setClickedIndex(index)}>
        {title}
      </li>
    );
  });

  const showBook = () => {
    setIsClicked(true);
    document.documentElement.style.backgroundColor = "#1c1c1c";
    document.body.style.backgroundColor ="#1c1c1c";
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
        {!isClicked ? (
          ""
        ) : (
          <AddPrompt
            bookTitle={bookTitle}
            setBookTitle={setBookTitle}
            setClickedIndex={setClickedIndex}
            setIsClicked={setIsClicked}
            setIsDark={setIsDark}
            isDark={isDark}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
