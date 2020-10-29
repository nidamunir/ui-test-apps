import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import RemoteCard from "ui/Card";
import useApi from "ui/useApi";
import Loader from "ui/Loader";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    useApi("user/231").then((user) => setUser(user));
    useApi("users").then((users) => setUsers(users));
  }, []);

  const handleAddUser = () => {
    const config = {
      method: "POST",
      body: JSON.stringify({ id: 4, name: "new user" }),
    };
    useApi("users", config).then((users) => setUsers(users));
  };

  const handleAddFruit = () => {
    const config = {
      method: "POST",
      body: JSON.stringify({ id: 4, name: "new fruit" }),
    };
    // useApi("addFruit",config).then((users) => setUsers(users))
  };

  return (
    <div>
      <div style={{ display: "flex", width: "500px", flexDirection: "column" }}>
        <p>Hi there, I'm the consumer app.</p>
        {users && users.length == 0 ? (
          <Loader />
        ) : (
          <p>
            <strong>pages/api/users </strong>
            {users ? (
              users.map((user) => <span key={user.id}>{user.name}, </span>)
            ) : (
              <span>Failed to fetch </span>
            )}
            <button onClick={handleAddUser}>Add new User</button>
          </p>
        )}
        {user && (
          <p>
            <strong>pages/api/users/231 </strong>
            {user.name}
          </p>
        )}
        <hr></hr>
        <RemoteCard />
      </div>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
