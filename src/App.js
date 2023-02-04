
import './App.css';
import Form from "./components/Form";
import { TodoList } from './components/TodoList';

import React, { useState, useEffect } from 'react'; 



function App() {
    
  const [todos, setTodos] = useState([{}]);
    
  useEffect(()=>{
  if (localStorage.getItem('ToDos')){
    setTodos(JSON.parse(localStorage.getItem('ToDos')));
    console.log(todos)
    };
  },[]);

  const addTodo = (newTodoTitle) => {
    if (newTodoTitle){
      const newTodo = {
       completed : false,
       title : newTodoTitle
      }; 
      localStorage.setItem('ToDos', JSON.stringify([...todos, newTodo]));
    
    setTodos([...todos, newTodo]);
    
    }
  }
  // 
  // };
// console.log(todos);
console.log(JSON.parse(localStorage.getItem('ToDos')));  

  const removeTodo = (todoIndex) => {
    const todosCopy = [...todos];
    todosCopy.splice(todoIndex, 1);
    localStorage.setItem('ToDos', JSON.stringify(todosCopy));
    setTodos(todosCopy);
  }
  
  const todoState = (todoIndex) => {
    const todosCopy = [...todos];
    todosCopy[todoIndex].completed=!todosCopy[todoIndex].completed;
    localStorage.setItem('ToDos', JSON.stringify(todosCopy));
    console.log(todosCopy);
    setTodos(todosCopy);
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} todoState={todoState}/>
    </div>
  );
}

export default App;

