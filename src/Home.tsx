import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="sidebar">
          <div className="side-title">
            <h1>Sidebar title</h1>
          </div>
          <div className="book-title">
            <ul>
              <li>Can't hurt me</li>
              <li>This is the reason</li>
              <li>Who are you</li>
            </ul>
          </div>
        </div>

        <div className="main">
          <h2>THis is the body part that goes to the middle</h2>
          <div className="notes">
            <ul>
              <li>
                Innovation distinguishes between a leader and a follower.”
              </li>
              <li>
                Your time is limited, so don't waste it living someone else's
                life.
              </li>
              <li>
                Don't let the noise of others opinions drown out your own inner
                voice.
              </li>
              <li>
                You can't connect the dots looking forward; you can only connect
                them looking backwards. So you have to trust that the dots will
                somehow connect in your future.
              </li>
              <li>Stay hungry. Stay foolish.</li>
              <li>
                We're here to put a dent in the universe. Otherwise why else
                even be here?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
