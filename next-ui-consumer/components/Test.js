import React, { useEffect } from "react";

export const fetchUsers = async () => {
  const data = await fetch("http://localhost:3000/api/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => data)
    .catch((e) => console.log("error fetching users", e));
  return data;
};

const Test = () => {
  useEffect(() => {}, []);

  return <div></div>;
};

export default Test;
