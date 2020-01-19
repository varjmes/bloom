import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Todo from '../components/Todo/Todo'
import TodoList from '../components/TodoList/TodoList'
import TodoForm from '../components/TodoForm/TodoForm'

describe('Todo', () => {
  it('should match snapshot', () => {
    const { container } = render(<Todo />)
    expect(container.firstChild).toMatchSnapshot()
  })

  describe('form interaction', () => {
    it('should set todo input value', () => {
      render(<Todo />)
      const input = screen.getByLabelText(/add todo/i)
      expect(input.value).toBe('')

      fireEvent.change(input, { target: { value: 'get eggs' } })
      expect(input.value).toBe('get eggs')
    })

    it('should add item to todo list', () => {
      render(<Todo />)
      const input = screen.getByLabelText(/add todo/i)
      const form = screen.getByTestId('form')

      expect(screen.getAllByRole('listitem').length).toBe(3)
      fireEvent.change(input, { target: { value: 'get eggs' } })
      expect(input.value).toBe('get eggs')

      fireEvent.submit(form)
      const items = screen.getAllByRole('listitem')
      expect(items.length).toBe(4)
      expect(items[3].textContent).toContain('get eggs')
      expect(input.value).toBe('')
    })
  })
})

describe('TodoList', () => {
  it('should match snapshot', () => {
    const { container } = render(<TodoList todos={['breakfast', 'lunch', 'dinner']} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('TodoForm ', () => {
  it('should match snapshot', () => {
    const { container } = render(<TodoForm todos={['breakfast', 'lunch', 'dinner']} setTodos={jest.fn()} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
