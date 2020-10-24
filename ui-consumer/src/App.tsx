import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";

import RemoteCard from 'ui/Card'
import CircularIndeterminate from 'ui/CircularIndeterminate'
import useApi from 'ui/useApi'

import "./index.css";

const App = () => {
    const [users, setUsers] = useState([]);  
    const [apps, setApps] = useState([]);  
    const [user, setUser] = useState(null);  

    useEffect(() => {
        useApi("user/231").then((user) => setUser(user))
        useApi("users").then((users) => setUsers(users))
        useApi("apps").then((apps) => setApps(apps))
    }, [])

    const handleAddUser = () => {
        const config = {
            method: "POST",
            body: JSON.stringify({id:4,name:"new user"}),
        }
        useApi("users",config).then((users) => setUsers(users))
    }

    return (
        <div>
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <p>
                Hi there, I'm the consumer app.
                </p>
                {user && <p>Fetched <strong>pages/api/users/231 </strong>{user.name}</p>}
                {users && <ul>
                    Fetched <strong>pages/api/users === </strong>
                {users.map((user) => <span key={user.id}>{user.name}, </span>)}
                </ul>}
                <button onClick={handleAddUser}>Add new User</button>
                {apps && <ul>
                    Fetched <strong>pages/api/apps === </strong>
                {apps.map((app) => <span key={app.id}>{app.name}, </span>)}
                </ul>}
                <RemoteCard />
                {/* <CircularIndeterminate/> */}
            </div>
        </div>
    );
};

export default App;
 

ReactDOM.render(<App />, document.getElementById("app"));
