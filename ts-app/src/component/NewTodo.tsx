import React, { useRef } from 'react'

const NewTodo = () => {
    let inputRef = useRef()
    const formSubmissionHandler = (event:React.FormEvent) =>{
        event.preventDefault()
        //inputRef = event
    }
  return (
    <form onSubmit={formSubmissionHandler} ref={inputRef}>
        <label htmlFor='text'>Add TODO</label>
        <input type='text' id='text'  />
        <button>Add</button>
    </form>
  )
}

export default NewTodo