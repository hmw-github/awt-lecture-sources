import { useState } from "react";

function AddTodoForm({ todos, onAddTodo }) {
  const [description, setDescription] = useState("");
  const [inputClass, setInputClass] = useState("normal");

  const handleDescriptionChange = (e) => {
    const value = e.target.value;

    setInputClass("normal");
    setDescription(value);
  };

  const handleAdd = (event) => {
    if (description.trim() === "") {
      setInputClass("error");
      event.preventDefault();
      return;
    }
    setDescription("");
    setInputClass("normal");
    event.preventDefault();

    // finally call reducer action
    onAddTodo(description);
  };

  return (
    <form onSubmit={handleAdd}>
      <label htmlFor="new-todo">new todo:</label>
      <input
        className={inputClass}
        type="text"
        id="new-todo"
        value={description}
        placeholder="describe todo..."
        onChange={handleDescriptionChange}
      />
      <button type="submit">
        add
      </button>
    </form>
  );
}

export default AddTodoForm;