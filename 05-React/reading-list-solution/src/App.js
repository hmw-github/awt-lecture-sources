import { useCallback, useEffect, useReducer } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { loadItems, readingListReducer, saveItems } from './readingListReducer';
import Home from './pages/Home';
import Search from './pages/Search';
import ReadingList from './pages/ReadingList';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';
import './App.css';

/**
 * Root component.
 * - owns the shared state (the reading list) and passes it down via props
 *   ("lifting state up": Search and ReadingList both need it)
 * - defines the routes of the application
 */
function App() {
  // useReducer with a lazy initializer (3rd argument): loadItems runs only once
  const [items, dispatch] = useReducer(readingListReducer, undefined, loadItems);

  // Effect: synchronize state with an external system (localStorage)
  // runs after every render in which "items" changed
  useEffect(() => {
    saveItems(items);
  }, [items]);

  // useCallback keeps the same function instance across renders.
  // dispatch is guaranteed to be stable, so the dependency array is empty.
  // Together with memo(ArticleRow) this avoids re-rendering every search result row.
  const addItem = useCallback((item) => dispatch({ type: 'add', item }), []);

  // derived state: computed during rendering, NOT stored in a separate useState
  const unreadCount = items.filter((i) => i.status === 'unread').length;

  return (
    <BrowserRouter>
      <header className="app-header">
        <h1>📚 My Reading List</h1>
        <nav>
          {/* NavLink adds the CSS class "active" to the link of the current route */}
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/list">
            Reading List <span className="badge">{unreadCount}</span>
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/search" element={<Search items={items} onAdd={addItem} />} />
          {/* nested route: ItemDetails is rendered inside ReadingList's <Outlet /> */}
          <Route path="/list" element={<ReadingList items={items} dispatch={dispatch} />}>
            <Route path=":id" element={<ItemDetails items={items} dispatch={dispatch} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
