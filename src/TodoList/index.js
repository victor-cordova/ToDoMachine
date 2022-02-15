import React from "react";
import "./ToDoList.css"
import { ToDoContext } from "../ToDoContext";

function ToDoList (props) {
    const { totalToDos } = React.useContext(ToDoContext);
    
    let lengthTotalToDosGreater6 = false;

    if (totalToDos >= 6) {
        lengthTotalToDosGreater6 = true;
    }
// 
    return (
        <section className="sectionList">
            <ul className={`divList ${lengthTotalToDosGreater6 && "divListScroll"}`}>
                {props.children}
            </ul>
        </section>
    );
}

export { ToDoList };