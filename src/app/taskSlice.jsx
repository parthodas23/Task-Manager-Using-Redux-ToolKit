// features/tasks/taskSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  filter: 'all',
  searchTerm: ''
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload, // <-- This is where the input value gets stored
        completed: false
      })
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    toggleStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload)
      if (task) task.completed = !task.completed
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  }
})

export const { addTask, deleteTask, toggleStatus, setFilter, setSearchTerm } = taskSlice.actions
export default taskSlice.reducer