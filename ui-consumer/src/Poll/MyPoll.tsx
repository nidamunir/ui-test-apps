import React from "react";
import ReactDOM from "react-dom";
import Poll from 'poll/Poll'


const PollComponent = () => {
    return (
                <Poll/>
    );
};

export default PollComponent;
 

ReactDOM.render(<PollComponent />, document.getElementById("poll"));
