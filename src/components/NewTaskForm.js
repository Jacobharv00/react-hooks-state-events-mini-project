import { useState } from "react";

function NewTaskForm({categoryList, onTaskFormSubmit}) {
  console.log('NewTaskForm Component', categoryList) //Gives me an Array of all categories

  const [text, setText] = useState('')
  const [category, setCategory] = useState('Misc')

  function handleTextChange(e) {
    setText(e.target.value)
  }

  function handleCategory(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      text: text,
      category: category
    }
    onTaskFormSubmit(formData)
    setText('')
    // setCategory('')
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          onChange={handleTextChange}
          value={text}
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          onChange={handleCategory} 
          value={category}>
          {categoryList.map((category) => {
            <option key={category}>
              {category}
            </option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  )
}

export default NewTaskForm
