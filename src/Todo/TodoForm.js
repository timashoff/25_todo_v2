import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) return
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Create</button>
    </form>
  )
}
