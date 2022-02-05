import React from "react";
import "./TodoCreate.css"

function TodoCreate (props) {
    
    const create = (event) => {
        const taskCreated = event.target.value;
        props.setCreatedToDo({ text:taskCreated, completed: false});
    }

    
    return (
        <form className="createForm">
            <input 
            type="text" 
            placeholder="Create task" 
            className="creater"
            onChange={create}
            onKeyPress={event => {
                if (event.key === "Enter") props.onCreate();
            }}
            />
            <input 
            type="button" 
            className="createButton" 
            onClick={props.onCreate}
            />
        </form>
    );
}

export { TodoCreate };

