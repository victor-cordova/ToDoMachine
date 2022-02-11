import React from "react";

function createRandomNumber(min, max) {
    var possibleNumber = max - min;
    var randomNumber = Math.random() * (possibleNumber + 1);
    randomNumber = Math.floor(randomNumber);
    return min + randomNumber;
  }
  

function useCreateToDo(saveTodos, toDos) {
    const [createdToDo, setCreatedToDo] = React.useState("");
    const [formsCreateToDo, setFormsCreateToDo] = React.useState(false);

    const onCreate = () => {
      const randomKey = createRandomNumber(0, 300)
      if(createdToDo) {
        const toDosUpdate = [...toDos, {...createdToDo, key: randomKey}];
        saveTodos(toDosUpdate);
        setFormsCreateToDo(false)
      }
    }

    return { createdToDo, setCreatedToDo, onCreate, formsCreateToDo, setFormsCreateToDo };
}

export {useCreateToDo};