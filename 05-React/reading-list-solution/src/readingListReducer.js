/**
 * State management for the reading list (concept: useReducer).
 *
 * A reading list item looks like this:
 *   { id: 1, title: 'Thinking in React', url: 'https://...', note: '', status: 'unread' }
 *
 * The reducer is a *pure* function: (currentState, action) => newState.
 * It never mutates the existing array or items – it always returns new objects.
 * This is what allows React (and memo) to detect changes by simple reference comparison.
 */

const STORAGE_KEY = 'reading-list-items';

export const initialItems = [
  {
    id: 1,
    title: 'React Quick Start',
    url: 'https://react.dev/learn',
    note: 'The official tutorial - start here.',
    status: 'read',
  },
  {
    id: 2,
    title: 'Thinking in React',
    url: 'https://react.dev/learn/thinking-in-react',
    note: '',
    status: 'unread',
  },
  {
    id: 3,
    title: 'You Might Not Need an Effect',
    url: 'https://react.dev/learn/you-might-not-need-an-effect',
    note: 'Read this before writing the next useEffect!',
    status: 'unread',
  },
];

/**
 * Lazy initializer for useReducer: called only once on the first render.
 * Restores the list from localStorage, falls back to the initial items.
 */
export function loadItems() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialItems;
  } catch {
    return initialItems;
  }
}

export function saveItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

/**
 * Take current items and an action and produce new items.
 * Supported actions:
 *   { type: 'add',    item: { title, url, note } }
 *   { type: 'update', item: { id, ...changedProperties } }
 *   { type: 'toggle', id }
 *   { type: 'remove', id }
 */
export function readingListReducer(items, action) {
  switch (action.type) {
    case 'add': {
      // do not add the same article twice
      if (items.some((i) => i.url === action.item.url)) {
        return items;
      }
      const newItem = {
        id: Date.now(),
        note: '',
        status: 'unread',
        ...action.item,
      };
      return [...items, newItem];
    }
    case 'update': {
      return items.map((i) =>
        i.id === action.item.id ? { ...i, ...action.item } : i
      );
    }
    case 'toggle': {
      return items.map((i) =>
        i.id === action.id
          ? { ...i, status: i.status === 'read' ? 'unread' : 'read' }
          : i
      );
    }
    case 'remove': {
      return items.filter((i) => i.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
