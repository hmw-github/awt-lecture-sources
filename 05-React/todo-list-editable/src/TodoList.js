import { useState } from "react";
import "./TodoList.css";
import TodoItems from "./TodoItems";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const todosInit = [
    {
      id: Date.now(),
      description: "go shopping today",
      status: "open",
    },
    {
      id: Date.now()+1,
      description: "clean room",
      status: "open",
    },
    {
      id: Date.now()+2,
      description: "program a cool app",
      status: "open",
    },
  ];

  // state management
  const [todos, setTodos] = useState(todosInit);

  return (
    <div className="todo-list">
      <h2>My Todo List</h2>
      <AddTodoForm todos={todos} setTodos={setTodos} />
      <hr />
      <TodoItems todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoList;