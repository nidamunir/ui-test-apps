import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom";

import RemoteCard from 'ui/Card'
import Test , { fetchUsers} from 'ui/Test'

import CircularIndeterminate from 'ui/CircularIndeterminate'
import "./index.css";

const App = () => {
 fetchUsers().then((d) => console.log("Fetched users",d));
 

    return (
        <div>
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <hr/> 
                <RemoteCard />
                {/* <Test /> */}
                <hr></hr>
                <CircularIndeterminate/>
                <p>
                Hi there, I'm the consumer app.
                </p>
            </div>
        </div>
    );
};

export default App;
 

ReactDOM.render(<App />, document.getElementById("app"));
