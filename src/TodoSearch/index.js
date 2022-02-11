import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoSearch.css"

function ToDoSearch () {
    const { setSearchToDo, setFormsCreateToDo } = React.useContext(ToDoContext);

    const search = (event) => {
        const searchUser = event.target.value;
        setSearchToDo(searchUser);
    }

    const openModal = () => {
        setFormsCreateToDo(true)
        // const taskCreated = event.target.value;
        // setCreatedToDo({ text:taskCreated, completed: false});
    }
    
    return (
        <form className="searcherForm">
            <input 
                type="text" 
                placeholder="Search task" 
                className="searcher"
                onChange={search}
            />

            <input 
                type="button" 
                onClick={openModal}
                className="createButton" 
            />
        </form>
    );
}

export { ToDoSearch };