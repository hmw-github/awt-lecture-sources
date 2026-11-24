import { useCallback, useEffect, useReducer } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { initialItems, loadItems, readingListReducer, saveItems } from './readingListReducer';
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
  // TODO 2.1: replace the two lines below by useReducer(readingListReducer, ...).
  //           Use loadItems as lazy initializer (3rd argument of useReducer).
  const items = initialItems;
  const dispatch = (action) => console.log('TODO 2.1 - dispatch:', action);

  // TODO 2.2: write an effect that calls saveItems(items) whenever items change.
  //           Which dependencies does the effect need?

  // TODO 8.2: wrap this function in useCallback so that it keeps its identity
  //           across renders (dispatch itself is stable).
  const addItem = (item) => dispatch({ type: 'add', item });

  // TODO 2.4: compute the number of unread items (derived state - no useState!)
  const unreadCount = 0;

  return (
    <BrowserRouter>
      <header className="app-header">
        <h1>📚 My Reading List</h1>
        <nav>
          {/* NavLink adds the CSS class "active" to the link of the current route */}
          <NavLink to="/" end>Home</NavLink>
          {/* TODO 2.5: add NavLinks for /search and /list.
                        Show {unreadCount} in a <span className="badge"> inside the /list link. */}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          {/* TODO 2.6: add routes
                - /search -> <Search items={items} onAdd={addItem} />
                - /list   -> <ReadingList items={items} dispatch={dispatch} />
              TODO 6.1: add a nested route ":id" inside the /list route
                        -> <ItemDetails items={items} dispatch={dispatch} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
