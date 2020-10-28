import React from "react";
import ReactDOM from "react-dom";
import Trivia from 'trivia/Trivia'


const TriviaComponent = () => {
    return (
                <Trivia />
    );
};

export default TriviaComponent;
 

ReactDOM.render(<TriviaComponent />, document.getElementById("trivia"));
