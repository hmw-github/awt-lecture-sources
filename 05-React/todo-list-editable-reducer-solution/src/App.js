import { useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  useEffect(() => {
    document.title = "Todo List";
  });
  
  return (
    <div className="container">
      <TodoList />
    </div>
  );
}

export default App;