import React from "react";
import "./ToDoItem.css"

function ToDoItem (props) {

    return (
        <form className="todoItem">
        
            <input 
            type="button" 
            className={`checkButton ${props.toDoCompleted && "checkButton--active"}`} 
            onClick={() => props.onToDoAlter("onCheck")}
            />
            {/*  */}
            <p 
            className={`TodoItemText ${props.toDoCompleted && "TodoItemText--active"}`}
            >{props.toDoText}</p>

            <input type="button" 
            className="deleteButton"
            onClick={() => props.onToDoAlter("onDelete")}
            />
        </form>
    );
}

export { ToDoItem };