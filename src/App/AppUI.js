import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoCreate } from "../TodoCreate";


function AppUI( {
    completedToDos,
    totalToDos,
    searchedToDos,

    
    setSearchToDo,
    
    setCreatedToDo,

    searchToDo,

    onToDoAlter,

    onCreate,

    error,
    loading
}
) {
    return (
        <React.Fragment>
            <TodoCounter
                completedToDos={completedToDos}
                totalToDos={totalToDos}
            />

            <TodoCreate
                onCreate={onCreate}
                setCreatedToDo={setCreatedToDo}
            />

            <TodoSearch 
                setSearchToDo={setSearchToDo}
            />

            <TodoList>
                {error && <p>Something bad happened</p>}
                {loading && <p>It's loading the to dos</p>}
                {(!loading && !searchedToDos.length && !searchToDo) && <p>Make your first to do.</p>}
                {(!loading && !searchedToDos.length && searchToDo) && <p>There's not to dos relates.</p>}

                {
                searchedToDos.map(searchedToDo => { 

                    return <TodoItem 
                    toDoText={ searchedToDo.text } 
                    key={ searchedToDo.key } 
                    toDoCompleted= { searchedToDo.completed }
                    onToDoAlter={(onAlter) => onToDoAlter(searchedToDo.key, onAlter)}
                    />
                })}
            </TodoList>
      
        </React.Fragment>
    )
}

export {AppUI}