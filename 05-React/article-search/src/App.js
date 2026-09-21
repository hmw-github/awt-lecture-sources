import { useEffect } from 'react';
import './App.css';
import ArticleSearch from './ArticleSearch';

function App() {
  useEffect(() => {
    document.title = "Article Search";
  });

  return (
    <div className="container">
      <ArticleSearch />
    </div>
  );
}

export default App;