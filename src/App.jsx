import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App(){

  const [todos , setTodos] = useState([]);
  const [idCounter , setIdCounter] = useState(1);


  const addTodo = (data) => {
    const newTodo = {
      id: idCounter,
      title: data.title,
      author:data.author,
      tags:data.tags,
      completed:false
    };
    setTodos((prev) => [...prev, newTodo]);
    setIdCounter((prev) => prev + 1);
  }
  // const addTodo = (text) => {
  //   if(text.trim === "") return;

  //   setTodos((prev) => [...prev, text]);
  // };

  const deleteTodo = (index) => {
    setTodos ((prev) => prev.filter((_, i ) => i !== index));
  };

  return(
    <div className ="container">
      <h1>TodoList</h1>
      <TodoForm onAdd={addTodo}/>
      <TodoList todos={todos} onDelete={deleteTodo}/>
    </div>
  );
}


