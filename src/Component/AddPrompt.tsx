import Button from "@mui/material/Button";
import { BookInfo } from "../globals";
import { useEffect, useState, useRef } from "react";

interface AddPromptProps {
  bookTitle: string[];
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setBookTitle: React.Dispatch<React.SetStateAction<string[]>>;
  setClickedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const AddPrompt = (props: AddPromptProps) => {
  const { bookTitle, setBookTitle, setClickedIndex, setIsClicked } = props;

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
    const inputValue = e.target.elements.inputField.value;

    setBookTitle((current) => [...current, inputValue]);
    setIsClicked(false);
    e.target.elements.inputField.value = "";
  };

  return (
    <>
      <div className="AddPrompt">
        <h1>Input Form Example</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(e);
          }}
        >
          <label htmlFor="inputField">
            Enter your name:
            <input type="text" id="inputField" name="inputField" />
          </label>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
};

export default AddPrompt;
