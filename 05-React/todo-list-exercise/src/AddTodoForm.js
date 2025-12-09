import { useState } from "react";
import './AddTodoForm.css';

function AddTodoForm({ todos, setTodos }) {
  const [description, setDescription] = useState('');
  const [classname, setClassname] = useState('');
  const [disabled, setDisabled] = useState('true');

  const changeDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
    setClassname('');
    setDisabled('');
    if (value.trim() === '') {
      setClassname('error');
      setDisabled('true');
    }
  }

  const add = () => {
    if (description.trim() === '') {
      return;
    }
    const newTodo = {
      id: Date.now(),
      description: description,
      status: 'open'
    };

    setTodos([...todos, newTodo]);
    setDescription('');
    setDisabled('true');
  }

  return (
    <>
      New todo: 
      <input type="text" 
        placeholder="describe todo..." 
        onChange={changeDescription}
        value={description}
        className={classname}
      />
      <button onClick={add} disabled={disabled}>add</button>
    </>
  );
}

export default AddTodoForm;