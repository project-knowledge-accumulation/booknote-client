import { mockData } from "./Mockdata";
import { useState, useEffect } from "react";
import { BookNote, BookInfo, noteCollection } from "../globals";
import axios from "axios";

interface BodyProp {
  focusedNote: noteCollection[] | [];
}

const Body = (props: BodyProp) => {
  const { focusedNote } = props;

  const showNote = focusedNote.map((page: noteCollection, index: number) => {
    return (
      <li key={index}>
        page: {page.page}:{page.note}
      </li>
    );
  });

  return (
    <>
      <div className="Body">
        <div className="edit-button">
          <button>Add Note</button>
          <button>Delete</button>
        </div>
        <ul className="note-list">{showNote}</ul>
      </div>
    </>
  );
};

export default Body;
