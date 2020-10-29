import React from "react";
import ReactDOM from "react-dom";

const Trivia = () => {
  return (
    <div>
      <p>My Trivia component</p>
    </div>
  );
};

export default Trivia;

ReactDOM.render(<Trivia />, document.getElementById("trivia"));
