import { useEffect } from 'react';
import './App.css';
import LoginForm from './LoginForm';

function App() {
  useEffect(() => { 
    document.title = 'Login Form';
  });
  
  return (
    <div className="container">
      <LoginForm />
    </div>
  );
}

export default App;