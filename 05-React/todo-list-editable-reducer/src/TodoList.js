import { useReducer } from "react";
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
  const [todos, dispatch] = useReducer(todosReducer, todosInit);

  const onAddTodo = (description) => {
    dispatch({
      type: 'addTodo',
      description: description
    });
  } 

  const onSave = (todo) => {
    dispatch({
      type: 'save',
      todo: todo
    });
  }

  const onDone = (todo) => {
    dispatch({
      type: 'done',
      todo: todo
    });
  }

  /**
   * Take current todos and an action and produce new todos.
   * @param {*} todos 
   * @param {*} action 
   * @returns  new todos
   */
  function todosReducer(todos, action) {
    switch(action.type) {
      case 'addTodo': {
        const newTodo = {
          id: Date.now(),
          description: action.description,
          status: "open",
        };
        console.log(`adding new todo: id=${newTodo.id}, description = ${action.description}`);
        return([...todos, newTodo]);    
      }
      case 'save': {
        if (!action.todo.description.trim().length) {
          return todos;
        }
        return todos.map((t) => {
          if (t.id === action.todo.id) {
            t.description = action.todo.description;
            return t;
          }
          return t;
        });
      }
      case 'done': {
        return todos.map((t) => {
          if (t.id === action.todo.id) {
            t.status = 'closed';
            return t;
          }
          return t;
        });
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  return (
    <div className="todo-list">
      <h2>My Todo List</h2>
      <AddTodoForm todos={todos} onAddTodo={onAddTodo} />
      <hr />
      <TodoItems todos={todos} onSave={onSave} onDone={onDone} />
    </div>
  );
}

export default TodoList;