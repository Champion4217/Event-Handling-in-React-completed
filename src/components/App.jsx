import React, { useState } from "react";

function App() {
  const [headingtext, setheadingtext] = useState("Hello");
  const [ismouse, setmouse] = useState(false);

  function handleClick() {
    setheadingtext("Submitted");
  }

  function handlemouseover() {
    setmouse(true);
  }

  function handlemouseout() {
    setmouse(false);
  }

  return (
    <div className="container">
      <h1>{headingtext}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: ismouse ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handlemouseover}
        onMouseOut={handlemouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
