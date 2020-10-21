import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TopAppBar from 'ui/TopAppBar';

const App = () => <div>
    <TopAppBar />
    Hi there, I'm the consumer app.</div>;

ReactDOM.render(<App />, document.getElementById("app"));
