import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { ToDoLoading } from "../ToDoLoading";
import {Modal} from "../modals";


function AppUI() {
    const { error, loading, searchedToDos, searchToDo, onToDoAlter, formsCreateToDo } = React.useContext(ToDoContext);
    return (
        <React.Fragment>
            <ToDoCounter/>

            <ToDoSearch/>
            
            <ToDoList>
                {error && <p>Something bad happened</p>}
                {loading && <ToDoLoading/>}
                {(!loading && !searchedToDos.length && !searchToDo) && <p>Make your first to do.</p>}
                {(!loading && !searchedToDos.length && searchToDo) && <p>There's not to dos relates.</p>}

                {searchedToDos.map(searchedToDo => { 
                    return <ToDoItem 
                        toDoText={ searchedToDo.text } 
                        key={ searchedToDo.key } 
                        toDoCompleted= { searchedToDo.completed }
                        onToDoAlter={(onAlter) => onToDoAlter(searchedToDo.key, onAlter)}
                    />
                })}
            </ToDoList>
            
            {formsCreateToDo && (
                <Modal/>
            )}
            
        </React.Fragment>
    )
}

export {AppUI}