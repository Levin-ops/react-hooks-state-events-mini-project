import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState('');

  const handleTextChange = event => {
    setTaskText(event.target.value);
  }

  const handleCategoryChange = event => {
    setTaskCategory(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    if (taskText.trim() !== ''){
      onTaskFormSubmit({
        text: taskText,
        category: taskCategory,
      })
      setTaskText('');
      setTaskCategory('');
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select value={taskCategory} name="category" onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category }
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
