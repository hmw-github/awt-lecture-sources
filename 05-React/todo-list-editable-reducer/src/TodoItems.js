import { useState } from "react";

function TodoItems({ todos, onSave, onDone }) {
  const [description, setDescription] = useState('');
  const [editableTodo, setEditableTodo] = useState(null);
  const openTodos = todos.filter((todo) => todo.status === "open");
  let todolistOrMessage = "";

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    editableTodo.description = description;
    onSave(editableTodo);
    setEditableTodo(null);
  };

  const handleStartEdit = (todo) => {
    setEditableTodo(todo);
    setDescription(todo.description);
  };

  if (openTodos.length > 0) {
    // filter only open todos and generate array of LI nodes for UL
    const items = openTodos.map((todo) => {
      if (editableTodo && editableTodo.id === todo.id) {
        return (
          <li key={todo.id}>
            <input type="text" value={description} onChange={handleDescriptionChange} />
            <button onClick={() => handleSave()}>save</button>
          </li>
        );
      }
      return (
        <li key={todo.id}>
          <span onClick={() => handleStartEdit(todo)}>{todo.description}</span>
          <button className="done" onClick={() => onDone(todo) }>
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