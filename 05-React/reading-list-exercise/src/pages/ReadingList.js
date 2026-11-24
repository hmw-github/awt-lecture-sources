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

  // TODO 3.2: only keep the items matching the filter ('all' keeps every item)
  const visibleItems = items;

  const handleAdd = (item) => {
    // TODO 4.6: dispatch an 'add' action and switch back to the 'list' tab
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
          {/* TODO 5.1: currently both tabs are always visible.
                Use conditional rendering: show the filter and the list if tab is 'list',
                otherwise show the <AddItemForm />. (Hint: a ternary with a fragment <>...</>)
                Type something into the form, switch tabs and come back: what happened
                to your draft - and why? */}
          <div className="filter">
            Show:
            {/* TODO 3.1: render one radio button with label per entry of FILTERS.
                          checked when filter equals the entry, onChange sets the filter. */}
          </div>
          {/* TODO 3.3: render a <ul className="reading-list"> with one
                <ReadingItem key={...} item={item} dispatch={dispatch} /> per visible item,
                or <p>Nothing to show – enjoy your day!</p> if there are none. */}

          {/* TODO 4.6: pass handleAdd as onAdd prop */}
          <AddItemForm />
        </div>

        {/* TODO 6.2: render the <Outlet /> here – the placeholder for the nested route /list/:id */}
      </div>
    </section>
  );
}

export default ReadingList;
