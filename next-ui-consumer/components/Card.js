import React, { useState, useEffect } from "react";

export default function Card() {
  const [id, setId] = useState(12);

  useEffect(() => {
    const myClock = setInterval(() => {
      setId(id + 1);
    }, 1500);

    return () => clearInterval(myClock);
  }, []);

  return (
    <img
      alt=""
      src={`https://placedog.net/500/280?id=${id}`}
      style={{
        padding: "1em",
        border: "10px solid green",
        width: 200,
        height: 180,
      }}
    />
  );
}
