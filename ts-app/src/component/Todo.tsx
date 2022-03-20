import React from 'react'
import Todos from '../models/todo'
import TodoItem from './TodoItem'
import classes from './Todo.module.css'

const Todo:React.FC<{items:Todos[]}> = (props) => {
  return (
    <ul className={classes.todos}>
        {props.items.map((item)=>(<TodoItem text={item.text} />))}
        
    </ul>
  )
}

export default Todo