import "./Sidebar.css";
import Button from "@mui/material/Button";
import { BookInfo } from "./globals";
import { useEffect, useState, useRef } from "react";

interface SidebarProps {
  bookTitle: string[];
  setBookTitle: React.Dispatch<React.SetStateAction<string[]>>;
  setClickedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Sidebar = (props: SidebarProps) => {
  const { bookTitle, setBookTitle, setClickedIndex } = props;
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log("🥳", bookTitle);
  }, [bookTitle]);

  const listBookTitle = bookTitle.map((title, index) => {
    return (
      <li key={index} onClick={() => setClickedIndex(index)}>
        {title}
      </li>
    );
  });

  const showBook = () => {
    setBookTitle((current) => [...current, "Kazuki"]);
    console.log(bookTitle);
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
          {bookTitle[0] !== undefined ? (
            <ul>{listBookTitle}</ul>
          ) : (
            "No books yet!"
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
