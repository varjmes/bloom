import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

const Todo = () => {
  const [todos, setTodos] = useState(['breakfast', 'kiss jo', 'splatoon 2'])

  return (
    <main>
      <h1>Todo Container</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </main>
  )
}

export default Todo
