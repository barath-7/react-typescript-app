import React from 'react';

import './App.css';
import Todo from './component/Todo';
import Todos from './models/todo';
let todos =[
  new Todos('hello'),
  new Todos('typescript')
]
function App() {
  return (
    <div className="App">
      {/* <Todo>hello</Todo> */}
      <Todo items={todos}/>
    </div>
  );
}

export default App;
