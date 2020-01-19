import React, { useState } from 'react'

const TodoForm = ({ setTodos, todos }) => {
  const [currentTodo, setCurrentTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setTodos([...todos, currentTodo])
    setCurrentTodo('')
  }

  return (
    <form onSubmit={handleSubmit} data-testid='form'>
      <label>
        add todo
        <input type='text' value={currentTodo} onChange={e => setCurrentTodo(e.target.value)}></input>
      </label>
      <button type='submit'>submit</button>
    </form>
  )
}

export default TodoForm
