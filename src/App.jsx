import React from 'react'
import { Provider } from 'react-redux'
import store from './app/store'
import { AddTask } from './features/addTask'
import { TaskList } from './features/taskList'
import { Filters } from './features/filters'
import { SearchBar } from './features/searchBar'
import { TaskStats } from './features/taskStats'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTask />
        <SearchBar />
        <Filters />
        <TaskStats />
        <TaskList />
      </div>
    </Provider>
  )
}

export default App