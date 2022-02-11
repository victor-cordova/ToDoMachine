import React from "react";

import { useToDos } from "../ToDoContext/useToDos";
import { useSearchToDo } from "../ToDoContext/useSearchToDo";
import { useCreateToDo } from "../ToDoContext/useCreateToDo";

const ToDoContext = React.createContext();

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
}

function ToDoProvider(props) {
  
  //Custom Hooks
  const { toDos, saveToDos, loading, error } = useToDos("TODOS_V1", []);

  const { createdToDo, 
    setCreatedToDo, 
    onCreate, 
    formsCreateToDo, 
    setFormsCreateToDo } = useCreateToDo(saveToDos, toDos);

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
      <ToDoContext.Provider value={{
          completedToDos,
          totalToDos,
          searchedToDos,
          
          setSearchToDo,
          
          createdToDo,
          setCreatedToDo,

          formsCreateToDo, 
          setFormsCreateToDo,

          searchToDo,

          onToDoAlter,

          onCreate,

          error,
          loading
      }}> 
        {props.children}
      </ToDoContext.Provider> 
  ); //Dentro de este componente se colocarán todos estados 
}

export { ToDoContext, ToDoProvider };