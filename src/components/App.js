import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  
  const myTasks = tasks.filter((task) => {
    if(category === "All"){
      return true
    }else{
      return task.category === category
    }
  })

  function handleWipe(e){
    const newTasks = tasks.filter((task) => {
      return task.text !== e.target.name
    })
    setTasks(newTasks)
  }

  function handleFilter(e){
    setCategory(e.target.value)
  }

  function onTaskFormSubmit(formData){
    setTasks([...tasks, formData])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CategoryFilter={category} categories={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList tasks={myTasks} handleWipe={handleWipe}/>
    </div>
  );
}

export default App;
