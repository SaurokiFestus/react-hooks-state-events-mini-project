import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  })

  const categoryOpt = categories.map((category) => {
    return (<option key={category} name="category" value={category}>{category}</option>)
  })

  function handleChange(e){
    e.preventDefault()
    const name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <form className="new-task-form" onSubmit={() => onTaskFormSubmit(formData)}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categoryOpt}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
