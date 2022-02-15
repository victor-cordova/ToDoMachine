import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css"

function ToDoCounter () {
    const { completedToDos, totalToDos } = React.useContext(ToDoContext);

    return (
        <React.Fragment>
            <h1 className="TodoTitle">To-do List</h1>
            <h2 className="TodoCounter">{completedToDos} de {totalToDos} to-dos are done</h2>
        </React.Fragment>
        // 
    );
}

export { ToDoCounter };