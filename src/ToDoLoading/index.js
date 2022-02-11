import React from "react";
import "./ToDoLoading.css"

function ToDoLoading () {
    return (
        <section>
            <div className="loadingAnimation"></div>
            <div className="loadingAnimation"></div>
            <div className="loadingAnimation"></div>
            <div className="loadingAnimation"></div>
            <div className="loadingAnimation"></div>
        </section>
    );
}

export {ToDoLoading};