import React from 'react'
import Todos from '../models/todo'
import TodoItem from './TodoItem'


const Todo:React.FC<{items:Todos[]}> = (props) => {
  return (
    <ul>
        {props.items.map((item)=>(<TodoItem text={item.text} />))}
        
    </ul>
  )
}

export default Todo