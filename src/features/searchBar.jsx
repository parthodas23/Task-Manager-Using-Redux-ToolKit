import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../app/taskSlice'

export const SearchBar = () => {
  const dispatch = useDispatch()

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  )
}