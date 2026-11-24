import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ReadingItem from '../components/ReadingItem';
import AddItemForm from '../components/AddItemForm';

const FILTERS = ['all', 'unread', 'read'];

/**
 * The reading list page.
 * Concepts: rendering lists with keys, filtering (derived state),
 * tabs with conditional rendering, nested routes with <Outlet />.
 */
function ReadingList({ items, dispatch }) {
  const [tab, setTab] = useState('list'); // 'list' | 'add'
  const [filter, setFilter] = useState('all');

  // derived from props + state, recalculated on every render
  const visibleItems = items.filter((i) => filter === 'all' || i.status === filter);

  const handleAdd = (item) => {
    dispatch({ type: 'add', item });
    setTab('list');
  };

  return (
    <section>
      <div className="tabs">
        <button className={tab === 'list' ? 'active' : ''} onClick={() => setTab('list')}>
          My list
        </button>
        <button className={tab === 'add' ? 'active' : ''} onClick={() => setTab('add')}>
          Add manually
        </button>
      </div>

      <div className="list-layout">
        <div>
          {/* conditional rendering: only the active tab is rendered.
              Note: the hidden form is unmounted, so a draft is lost when switching tabs. */}
          {tab === 'list' ? (
            <>
              <div className="filter">
                Show:
                {FILTERS.map((f) => (
                  <label key={f}>
                    <input
                      type="radio"
                      name="filter"
                      value={f}
                      checked={filter === f}
                      onChange={() => setFilter(f)}
                    />
                    {f}
                  </label>
                ))}
              </div>
              {visibleItems.length > 0 ? (
                <ul className="reading-list">
                  {visibleItems.map((item) => (
                    <ReadingItem key={item.id} item={item} dispatch={dispatch} />
                  ))}
                </ul>
              ) : (
                <p>Nothing to show – enjoy your day!</p>
              )}
            </>
          ) : (
            <AddItemForm onAdd={handleAdd} />
          )}
        </div>

        {/* placeholder for the nested route /list/:id */}
        <Outlet />
      </div>
    </section>
  );
}

export default ReadingList;
