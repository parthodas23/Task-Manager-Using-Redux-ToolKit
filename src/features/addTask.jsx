import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../app/taskSlice'

export const AddTask = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTask(input.trim()))
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  )
}