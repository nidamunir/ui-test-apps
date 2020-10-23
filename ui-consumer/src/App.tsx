import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import RemoteCard from 'ui/Card'
import CircularIndeterminate from 'ui/CircularIndeterminate'

import "./index.css";

const App = () => {
    return (
        <div>
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <hr/> 
                <RemoteCard />
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
