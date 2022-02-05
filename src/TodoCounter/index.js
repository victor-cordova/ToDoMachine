import React from "react";
import "./TodoCounter.css"

function TodoCounter (props) {
    return (
        <React.Fragment>
            <h1 className="TodoTitle">To-do List</h1>
            <h2 className="TodoCounter">{props.completedToDos} de {props.totalToDos} to-dos are done</h2>
        </React.Fragment>
    );
}

export { TodoCounter };