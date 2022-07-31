import React from "react";

function Task({text, category, handleWipe}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" name={text} onClick={handleWipe}>X</button>
    </div>
  );
}

export default Task;
