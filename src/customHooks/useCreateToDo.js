import React from "react";

function createRandomNumber(min, max) {
    var possibleNumber = max - min;
    var randomNumber = Math.random() * (possibleNumber + 1);
    randomNumber = Math.floor(randomNumber);
    return min + randomNumber;
  }
  

function useCreateToDo(saveTodos, toDos) {
    const [createdToDo, setCreatedToDo] = React.useState("");

    const onCreate = () => {
      if(createdToDo) {
        const toDosUpdate = [...toDos, {...createdToDo, key: createRandomNumber(0, 300)}];
        
        saveTodos(toDosUpdate);
        // setToDos(toDosUpdate);
        // localStorage.setItem("TODOS_V1", JSON.stringify(toDosUpdate));
      }
    }
  
    return { createdToDo, setCreatedToDo, onCreate };
}

export {useCreateToDo};