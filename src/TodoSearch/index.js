import React from "react";
import "./TodoSearch.css"

function TodoSearch ({ setSearchToDo }) {


    const search = (event) => {
        const searchUser = event.target.value;
        setSearchToDo(searchUser);
    }
    
    return (
        <form className="searcherForm">
            <input 
                type="text" 
                placeholder="Search task" 
                className="searcher"
                onChange={search}
            />

            {/* <input 
                type="button" 
                className="searcherButton" 
            /> */}
        </form>
    );
}

export { TodoSearch };