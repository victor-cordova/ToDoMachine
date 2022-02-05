import React from "react";

import './App.css';

import { AppUI } from "./AppUI";
import { useToDos } from "../customHooks/useToDos";
import { useSearchToDo } from "../customHooks/useSearchToDo";
import { useCreateToDo } from "../customHooks/useCreateToDo";


class ToDoAlter {
  constructor(toDos, saveToDos) {
      this.toDos = toDos;
      this.saveToDos = saveToDos;
  }
  onDelete(key) {
    const toDosDeleted = this.toDos.filter(toDo => key !== toDo.key);
    
    this.saveToDos(toDosDeleted)
  }

  onCheck(key) {
    const toDosChecked = this.toDos.map(toDo => {
      if (key === toDo.key) {
        toDo["completed"] = !toDo.completed;
        return toDo;

      }
      else {
        return toDo;
      }
    });

    this.saveToDos(toDosChecked)
  }

  // update(toDoUpdated) {
  //   localStorage.setItem("TODOS_V1", JSON.stringify(toDoUpdated));
  //   this.setToDos(toDoUpdated);
  // }
}


function App() {

  //Custom Hooks
  const { toDos, saveToDos, loading, error } = useToDos("TODOS_V1", []);
  const { createdToDo, setCreatedToDo, onCreate } = useCreateToDo(saveToDos, toDos);
  const {searchedToDos, setSearchToDo, searchToDo} = useSearchToDo(toDos);

  // TodoCounter
  const completedToDos = toDos.filter(toDo => toDo.completed).length;
  const totalToDos = toDos.length;

  //Function to alter toDos
  const onToDoAlter = (key, onAlter) => {
    const toDoAlter = new ToDoAlter(toDos, saveToDos);
    toDoAlter[onAlter](key);
  } 
  
  return (
    <AppUI
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      searchedToDos={searchedToDos}
      
      setCreatedToDo={setCreatedToDo}
      
      createdToDo={createdToDo}
      setSearchToDo={setSearchToDo}

      searchToDo={searchToDo}
      
      onToDoAlter={onToDoAlter}

      loading={loading}
      error={error}

      onCreate={onCreate}
    />
  );
}

export default App;