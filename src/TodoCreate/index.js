import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCreate.css"

function ToDoCreate () {

    const { setCreatedToDo, onCreate, setFormsCreateToDo } = React.useContext(ToDoContext);

    const creating = (event) => {
        const taskCreated = event.target.value;
        setCreatedToDo({ text:taskCreated, completed: false});
    }

    const cancel = () => {
        setCreatedToDo("");
        setFormsCreateToDo(false)
    }
    
    return (
        <div className="forms">
            <form className="formsCreate">            
                <input 
                type="button" 
                className="cancelButtonForms" 
                onClick={cancel}
                />

                <textarea 
                    type="text"
                    className={`todoItemText`}
                    onChange={creating}
                    onKeyPress={event => {
                        if (event.key === "Enter") onCreate();
                    }}
                />   

                <input type="button" 
                className="saveButtonForms"
                onClick={onCreate}
                />
            </form>
        </div>
    );
}

export { ToDoCreate };

