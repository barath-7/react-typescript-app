import React from 'react'
import Todos from '../models/todo'
import TodoItem from './TodoItem'
import classes from './Todo.module.css'

const Todo:React.FC<{items:Todos[]; onRemoveTodo:(id:string)=>void}> = (props) => {
  return (
    <ul className={classes.todos}>
        {props.items.map((item)=>(<TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)} />))}
        
    </ul>
  )
}

export default Todo