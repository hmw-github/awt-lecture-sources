import { useState } from "react";

function AddTodoForm({ todos, setTodos }) {
  const [description, setDescription] = useState('');
  
  const changeDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
  }

  const add = () => {
    const newTodo = {
      id: Date.now(),
      description: description,
      status: 'open'
    };

    setTodos([...todos, newTodo]);
    setDescription('');
  }

  return (
    <>
      New todo: 
      <input type="text" 
        placeholder="describe todo..." 
        onChange={changeDescription}
        value={description}
      />
      <button onClick={add}>add</button>
    </>
  );
}

export default AddTodoForm;