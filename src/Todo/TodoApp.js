import { useState } from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

export const TodoApp = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newItem = {
      text,
      isCompleted: false,
      id: Date.now(),
    }
    setTodos([...todos, newItem])
  }

  return (
    <div>
      <TodoList todos={todos} />
      <TodoForm addTodo={addTodoHandler} />
    </div>
  )
}
