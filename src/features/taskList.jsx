import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask,toggleStatus } from '../app/taskSlice'

export const TaskList = () => {
  const { tasks, filter, searchTerm } = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesFilter = filter === 'all' || 
        (filter === 'completed' && task.completed) || 
        (filter === 'incomplete' && !task.completed)
      
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase())
      
      return matchesFilter && matchesSearch
    })
  }, [tasks, filter, searchTerm])

  return (
    <div>
      {filteredTasks.map(task => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleStatus(task.id))}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}