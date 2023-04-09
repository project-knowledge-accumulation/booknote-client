import { useState, useEffect } from "react";
type BookNote = {
    
}

const Body = () => {
  const [bookNote, setBookNote] = useState<string | null>("");
  return (
    <>
      <div className="Body"></div>
    </>
  );
};

export default Body;
