import { useState } from "react";

function AddTodoForm({ todos, setTodos }) {
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

    const newTodo = {
      id: Date.now(),
      description: description,
      status: "open",
    };
    console.log(`adding new todo: id=${newTodo.id}, description = ${description}`);
    setTodos([...todos, newTodo]);
    setDescription("");
    setInputClass("normal");
    event.preventDefault();
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