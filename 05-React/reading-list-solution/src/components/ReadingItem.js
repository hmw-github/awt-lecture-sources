import { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * A single entry of the reading list, editable in place.
 * Concepts: local UI state (edit mode), controlled input,
 * event handlers, dispatching actions to the reducer.
 */
function ReadingItem({ item, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(item.title);

  const startEdit = () => {
    setTitle(item.title);
    setIsEditing(true);
  };

  const save = () => {
    if (title.trim().length) {
      dispatch({ type: 'update', item: { id: item.id, title: title.trim() } });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') save();
    if (event.key === 'Escape') setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <input
          autoFocus
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          className={title.trim().length ? '' : 'error'}
        />
        <button onClick={save}>save</button>
        <button onClick={() => setIsEditing(false)}>cancel</button>
      </li>
    );
  }

  return (
    <li className={item.status}>
      <input
        type="checkbox"
        title="mark as read"
        checked={item.status === 'read'}
        onChange={() => dispatch({ type: 'toggle', id: item.id })}
      />
      {/* relative link: resolves to /list/<id> */}
      <NavLink to={String(item.id)} className="item-title">
        {item.title}
      </NavLink>
      <button onClick={startEdit}>edit</button>
      <button className="remove" onClick={() => dispatch({ type: 'remove', id: item.id })}>
        remove
      </button>
    </li>
  );
}

export default ReadingItem;
