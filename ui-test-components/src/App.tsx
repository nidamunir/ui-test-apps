import React from "react";
import ReactDOM from "react-dom";
import TopAppBar from './components/TopAppBar'
import "./index.css";

const App = () => <div>
    <TopAppBar />
    Hi there, I'm the app with ui components
    </div>;

ReactDOM.render(<App />, document.getElementById("app"));
