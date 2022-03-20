import React, { useState } from 'react';

import './App.css';
import NewTodo from './component/NewTodo';
import Todo from './component/Todo';
import Todos from './models/todo';
// let todos =[
//   new Todos('hello'),
//   new Todos('typescript')
// ]
function App() {

const [todos, setTodos] = useState<Todos[]>([])

  const addTodoHandler = (todoText:string) =>{
    const newTodo = new Todos(todoText)
    setTodos((prev)=>{
      return prev.concat(newTodo)
    })
  }
  return (
    <div className="App">
      {/* <Todo>hello</Todo> */}
      <Todo items={todos}/>
      <NewTodo onAddTodo={addTodoHandler} />
    </div>
  );
}

export default App;
