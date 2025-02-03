// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../app/taskSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
