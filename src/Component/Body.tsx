import { mockData } from "./Mockdata";
import { useState, useEffect } from "react";
import { BookNote, BookInfo, noteCollection } from "../globals";
import axios from "axios";

interface BodyProp {
  focusedNote: noteCollection[] | [];
  renderAuthor: string | null;
  renderTitle: string | null;
}

const Body = (props: BodyProp) => {
  const { focusedNote, renderAuthor, renderTitle } = props;

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
          <button>Add Note</button>
          <button>Delete</button>
        </div>
        <ul className="note-list">{showNote}</ul>
      </div>
    </>
  );
};

export default Body;
