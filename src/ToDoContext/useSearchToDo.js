import React from "react";

function useSearchToDo(toDos) {

  const [searchToDo, setSearchToDo] = React.useState("");

  let searchedToDos = [];

  if (toDos) {
    searchedToDos = toDos.filter(toDo => {
      const toDoLower = toDo.text.toLowerCase();
      const searchToDoLower = searchToDo.toLowerCase();
      
      return toDoLower.includes(searchToDoLower);
    })
  }

  return {searchedToDos, setSearchToDo, searchToDo};
}

export {useSearchToDo};