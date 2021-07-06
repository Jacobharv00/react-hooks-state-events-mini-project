// import { useState }from "react";
import Task from './Task'


function TaskList({tasks, handleDelete}) {
  // console.log('TaskList Component', tasks)

  
  const taskList = tasks.map((task) => {
    // console.log(task)
    return (
      <div className="tasks">
       <Task 
          key={task.text}
          text={task.text}
          category={task.category}
          handleDelete={handleDelete}
        />
      </div>
    )
  })
  return (
    <>{taskList}</>
  )
 
}

export default TaskList;
