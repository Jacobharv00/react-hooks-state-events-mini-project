import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksList, setTasksList] = useState(TASKS)
  const [category, setCategory] = useState('All')
  
  function handleDelete(taskName) {
    const updatedTaskList = tasksList.filter(task => task.text !== taskName)
    setTasksList(updatedTaskList)
}

  const filteredTasks = tasksList.filter((task) => {
    return category === 'All' ? true : task.category === category
  })

  function handleFilteredCategory(e) {
    // console.log(e.target.innerText)
    setCategory(e.target.innerText)
  }

  function handleSubmit(newTask) {
    setTasksList([...tasksList, newTask])
  }

  const categoryList = CATEGORIES.filter((category) => category !== 'All')

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        handleFilteredCategory={handleFilteredCategory}
        selectedCategory={category}
      />
      <NewTaskForm categoryList={categoryList} onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
