import React from 'react'
import { List } from './styles'

const generateTodoList = todos => {
  return todos.map(todo => <li><span role='img' aria-label='done'>🌱</span> {todo}</li>)
}

const TodoList = ({ todos }) => (
  <List>
    {generateTodoList(todos)}
  </List>
)

export default TodoList
