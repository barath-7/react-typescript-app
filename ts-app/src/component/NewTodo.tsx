import React, { useRef } from 'react'
import classes from './NewTodo.module.css'


const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {
    let inputRef = useRef<HTMLInputElement>(null)
    const formSubmissionHandler = (event:React.FormEvent) =>{
        event.preventDefault()
      let enteredText = inputRef.current!.value
      //console.log(enteredText)

      props.onAddTodo(enteredText)
    }
  return (
    <form onSubmit={formSubmissionHandler} className={classes.form}>
        <label htmlFor='text'>Add TODO</label>
        <input type='text' id='text'  ref={inputRef} />
        <button>Add</button>
    </form>
  )
}

export default NewTodo