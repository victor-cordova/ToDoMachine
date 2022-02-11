import React from 'react';
import ReactDOM from 'react-dom';
import { ToDoCreate } from "../ToDoCreate"

function Modal () {

    return ReactDOM.createPortal(
        <ToDoCreate/>,   
        document.getElementById("modal")
    );
};

export {Modal};