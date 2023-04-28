import { mockData } from "./Mockdata";
import { useState, useEffect } from "react";
import { BookNote, BookInfo, noteCollection } from "../globals";
import axios from "axios";
import { noteObject } from "../BookObject";

interface BodyProp {
  focusedNote: noteCollection[] | [];
  renderAuthor: string | null;
  renderTitle: string | null;
  setBookInfo: React.Dispatch<React.SetStateAction<BookInfo[] | []>>;
  setFocusedNote: React.Dispatch<React.SetStateAction<noteCollection[] | []>>;
  bookInfo: BookInfo[] | [];
}

const Body = (props: BodyProp) => {
  const {
    focusedNote,
    renderAuthor,
    renderTitle,
    bookInfo,
    setBookInfo,
    setFocusedNote,
  } = props;

  const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false);

  const createNote = (e: Event) => {
    e.preventDefault();
    // const note = new noteObject()
  };
  if (focusedNote === undefined && !addButtonClicked) {
    return (
      <>
        <h1>There are currently no notes here!</h1>
        <div className="edit-button">
          <button onClick={() => setAddButtonClicked(true)}>Add Note</button>
          <button>Delete</button>
        </div>
      </>
    );
  }

  const showNote = () => {
    return focusedNote.map((page: noteCollection, index: number) => {
      return (
        <li key={index}>
          page: {page.page}:{page.note}
        </li>
      );
    });
  };

  const handleNoteSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.elements.noteField.value);
    const pageValue = e.target.elements?.pageField.value;
    const noteValue = e.target.elements?.noteField.value;
    //new note object.
    const bookNote = new noteObject(pageValue, noteValue);
    JSON.stringify(bookNote);
    setFocusedNote((current) => [...(current ?? []), bookNote]);
    console.log(focusedNote);
    setAddButtonClicked(false);
    e.target.elements.pageField.value = "";
    e.target.elements.noteField.value = "";
    document.documentElement.style.backgroundColor = "#faebd7";
    document.body.style.backgroundColor = "#faebd7";
  };

  return (
    <>
      <div className="Body">
        {renderTitle && renderAuthor !== null ? (
          <div className="body-header">
            <h2>
              {renderTitle} by {renderAuthor}
            </h2>
          </div>
        ) : (
          ""
        )}
        <div className="edit-button">
          <button
            onClick={() => {
              console.log("Clicked");
              setAddButtonClicked(true);
            }}
          >
            Add Note
          </button>
          <button>Delete</button>
        </div>
        {addButtonClicked ? (
          <div className="AddPrompt">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNoteSubmit(e);
              }}
            >
              <label htmlFor="pageField">
                Page Number
                <input type="number" id="pageField" name="pageField" />
              </label>

              <label htmlFor="noteField">
                Highlighted Notes
                <input type="text" id="noteField" name="noteField" />
              </label>
              <div className="form-button">
                <button type="submit" onClick={() => handleNoteSubmit}>
                  Confirm
                </button>
                {/* <button onClick={() => handleCancel}>Cancel</button> */}
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {focusedNote !== undefined ? (
          <ul className="note-list">{showNote()}</ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Body;
