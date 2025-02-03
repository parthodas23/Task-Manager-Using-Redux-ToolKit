import React from "react";
import { useSelector } from "react-redux";

export const TaskStats = () => {
  const { tasks } = useSelector((state) => state.tasks);

  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const incomplete = total - completed;

  return (
    <div>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
      <p>Incomplete: {incomplete}</p>
    </div>
  );
};
