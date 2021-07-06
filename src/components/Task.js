import React from "react";


function Task({text, category, handleDelete}) {

  function onDelete() {
    handleDelete(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
