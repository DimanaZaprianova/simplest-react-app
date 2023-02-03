
import './App.css';
import Form from "./components/Form";
import { TodoList } from './components/TodoList';

import React, { useState, useEffect } from 'react'; 



function App() {
  // function storageAvailable(type) {
  //   let storage;
  //   try {
  //       storage = window[type];
  //       const x = '__storage_test__';
  //       storage.setItem(x, x);
  //       storage.removeItem(x);
  //       return true;
  //   }
  //   catch (e) {
  //       return e instanceof DOMException && (
  //           // everything except Firefox
  //           e.code === 22 ||
  //           // Firefox
  //           e.code === 1014 ||
  //           // test name field too, because code might not be present
  //           // everything except Firefox
  //           e.name === 'QuotaExceededError' ||
  //           // Firefox
  //           e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
  //           // acknowledge QuotaExceededError only if there's something already stored
  //           (storage && storage.length !== 0);
  //   }
  // };
   
  const [todos, setTodos] = useState([]);
  const onceOnly = useState([]);

  
  useEffect(()=>{
  if (localStorage){
    let m = localStorage.getItem('ToDos');
    setTodos([todos, JSON.parse(m)]);
    console.log(todos)
    };
  
  },[]);

  const addTodo = (newTodo) => {
    
    if (newTodo){
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
    setTodos(todosCopy);
  }
  
  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;

