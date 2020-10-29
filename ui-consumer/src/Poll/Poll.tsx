import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Poll = () => {
  const [id, setId] = useState(12);

  useEffect(() => {
    const myClock = setInterval(() => {
      setId(id + 1);
    }, 1500);

    return () => clearInterval(myClock);
  }, [id]);

  return (
    <div>
      <p>My Poll component {id}</p>
    </div>
  );
};

export default Poll;

ReactDOM.render(<Poll />, document.getElementById("poll"));
