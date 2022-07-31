import React from "react";
import Task from "./Task";

function TaskList({tasks, handleWipe}) {
  const myTasks = tasks.map((task) => {
    return (
      <Task 
      text={task.text}
      category={task.category}
      key={task.text}
      handleWipe={handleWipe}
      />
    )
  })
  return (
    <div className="tasks">
      {myTasks}
    </div>
  );
}

export default TaskList;
