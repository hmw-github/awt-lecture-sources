function TodoItems({ todos, setTodos }) {
  const handleDone = (todo) => {
    todo.status = 'closed';
    setTodos([...todos]);
  };

  const openTodos = todos.filter(todo => todo.status === 'open');
  let listOrMessage = '';

  if (openTodos.length === 0) {
    listOrMessage = <p>Nothing to do - enjoy your day!</p>;
  } else {
    const items = openTodos.map(todo => <li key={todo.id}> 
        {todo.description} 
        <button onClick={() => handleDone(todo)}>done</button>
      </li>);
    listOrMessage = <ul>{items}</ul>;
  }

  return (
    <>
      <h3>Current Todos</h3>
      {listOrMessage}
    </>
  );

}

export default TodoItems;