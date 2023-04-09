import { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="Sidebar">
        <div className="side-title">
          <h2>Book List</h2>
        </div>
        <div className="book-title">
          <ul>
            <li>Can't hurt me</li>
            <li>Steve Jobs</li>
            <li>Who are you</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
