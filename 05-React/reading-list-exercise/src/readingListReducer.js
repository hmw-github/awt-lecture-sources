/**
 * State management for the reading list (concept: useReducer).
 * A reducer is a means to achieve centralized event handling (event handlers 
 * are not scattered over multiple components any more)
 *
 * A reading list item looks like this:
 *   { id: 1, title: 'Thinking in React', url: 'https://...', note: '', status: 'unread' }
 *
 * The reducer is a *pure* function: (currentState, action) => newState.
 * It must never mutate the existing array or items – always return new objects
 * (use the spread operator ... , map and filter).
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
  // TODO 2.3: read STORAGE_KEY from localStorage and parse it with JSON.parse.
  //           Return initialItems if nothing is stored (or parsing fails).
  return initialItems;
}

export function saveItems(items) {
  // TODO 2.3: store the items as JSON string in localStorage under STORAGE_KEY
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
      // TODO 1.1: return a NEW array containing all items plus a new item with
      //           id: Date.now(), note: '', status: 'unread' and the properties of action.item.
      //           Bonus: do not add an item whose url is already on the list.
      return items;
    }
    case 'update': {
      // TODO 1.2: return a new array in which the item with id action.item.id
      //           is replaced by a copy with the properties of action.item merged in
      return items;
    }
    case 'toggle': {
      // TODO 1.3: switch the status of the item with id action.id between 'read' and 'unread'
      return items;
    }
    case 'remove': {
      // TODO 1.4: return a new array without the item with id action.id
      return items;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
