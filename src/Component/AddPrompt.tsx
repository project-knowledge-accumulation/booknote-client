import "../Styling/AddPrompt.css";
import Button from "@mui/material/Button";
import { BookInfo } from "../globals";
import { useEffect, useState, useRef, useContext } from "react";
import { bookInfoObject } from "../BookObject";
import AppContext from "../AppContext";

interface AddPromptProps {
  bookTitle: string[];
  isDark: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  setBookTitle: React.Dispatch<React.SetStateAction<string[]>>;
  setClickedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setBookInfo: React.Dispatch<React.SetStateAction<BookInfo[] | []>>;
  setBookAuthor: React.Dispatch<React.SetStateAction<string[]>>;
  bookInfo: BookInfo[] | [];
}

const AddPrompt = (props: AddPromptProps) => {
  const {
    bookTitle,
    setBookTitle,
    setClickedIndex,
    setIsDark,
    isDark,
    bookInfo,
    setBookInfo,
    setBookAuthor,
  } = props;
  const value = useContext(AppContext);
  const { uId, isClicked, setIsClicked } = value;

  useEffect(() => {
    console.log("😶‍🌫️", bookInfo);
  }, []);

  //4.18
  //currently add's a book to the array, but this button will need to
  //instantiate a new object that represents one book object.
  /* 
    {
      title: string,
      noteCollection: NoteCollection[]
    }
  */

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const titleValue = e.target.elements?.titleField.value;
    const authorValue = e.target.elements?.authorField.value;
    //new bookInfo object.
    const newBook = new bookInfoObject(titleValue, authorValue);
    JSON.stringify(newBook);
    setBookInfo((current) => [...current, newBook]);
    setBookTitle((current) => [...current, titleValue]);
    setBookAuthor((current) => [...current, authorValue]);
    setIsClicked(false);
    e.target.elements.titleField.value = "";
    e.target.elements.authorField.value = "";
    document.documentElement.style.backgroundColor = "#faebd7";
    document.body.style.backgroundColor = "#faebd7";
  };

  const handleCancel = () => {
    setIsClicked(false);
    document.documentElement.style.backgroundColor = "#faebd7";
    document.body.style.backgroundColor = "#faebd7";
  };

  return (
    <>
      <div className="AddPrompt">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(e);
          }}
        >
          <label htmlFor="titleField">
            Book Title
            <input type="text" id="titleField" name="titleField" />
          </label>

          <label htmlFor="authorField">
            Author
            <input type="text" id="authorField" name="authorField" />
          </label>
          <div className="form-button">
            <button type="submit">Confirm</button>
            <button onClick={() => handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPrompt;
