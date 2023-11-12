import React from "react";

function Task({task, onDelete}) {

  const {id,text, category} = task

function handleDeleteTask (){
  onDelete(id)
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
