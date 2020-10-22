import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import RemoteAppBar from 'ui/TopAppBar';
import RemoteButton from 'ui/Button'
import RemoteCard from 'ui/Card'
import AlertDialog from 'ui/AlertDialog'
import CircularIndeterminate from 'ui/CircularIndeterminate'

import "./index.css";
// const RemoteCard = lazy(() => import("nextUi/Card"));

const App = () => {
    return (
        <div>
            <RemoteAppBar />  
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <RemoteButton />
                <hr/> 
                <RemoteCard />
                <hr></hr>
                <AlertDialog />
                <CircularIndeterminate/>
                <p>
                Hi there, I'm the consumer app.
                </p>
            </div>
        {/* <Suspense fallback="Loading dogs">
            <RemoteCard />
        </Suspense> */}
        </div>
    );
};

export default App;
 

ReactDOM.render(<App />, document.getElementById("app"));
