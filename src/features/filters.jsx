import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../app/taskSlice'

export const Filters = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state) => state.tasks)

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter('all'))}
        disabled={filter === 'all'}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        disabled={filter === 'completed'}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(setFilter('incomplete'))}
        disabled={filter === 'incomplete'}
      >
        Incomplete
      </button>
    </div>
  )
}