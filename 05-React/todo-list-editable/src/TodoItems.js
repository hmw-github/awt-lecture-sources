import { useState } from "react";

function TodoItems({ todos, setTodos }) {
  const [editableTodo, setEditableTodo] = useState(null);
  const [description, setDescription] = useState('');
  const openTodos = todos.filter((todo) => todo.status === "open");
  let todolistOrMessage = "";

  const handleDone = (todo) => {
    console.log("done: " + JSON.stringify(todo));
    todo.status = "closed";
    // set new todo array to cause refresh of component
    setTodos([...todos]);
  };

  const handleStartEdit = (todo) => {
    setEditableTodo(todo);
    setDescription(todo.description);
  };

  const handleSave = () => {
    if (description.trim().length) {
      editableTodo.description = description;
      setTodos([...todos]);
      setEditableTodo(null);
    } else {
      setEditableTodo(null);
    }
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  if (openTodos.length > 0) {
    // filter only open todos and generate array of LI nodes for UL
    const items = openTodos.map((todo) => {
      if (editableTodo && editableTodo.id === todo.id) {
        return (
          <li key={todo.id}>
            <input type="text" value={description} onChange={handleDescriptionChange} />
            <button onClick={handleSave}>save</button>
          </li>
        );
      }
      return (
        <li key={todo.id}>
          <span onClick={() => handleStartEdit(todo)}>{todo.description}</span>
          <button className="done" onClick={() => handleDone(todo)}>
            done
          </button>
      </li>
    )});
    todolistOrMessage = <ul>{items}</ul>;
  } else {
    todolistOrMessage = "No todos, enjoy your day!";
  }

  return (
    <>
      <h3>Current Todos (klick on Todo to edit)</h3>
      {todolistOrMessage}
    </>
  );
}

export default TodoItems;