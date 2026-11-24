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
    // TODO 3.5: copy the current title of the item into "title" and switch to edit mode
  };

  const save = () => {
    // TODO 3.5: if the trimmed title is not empty, dispatch an 'update' action
    //           with { id, title }. Leave the edit mode in any case.
  };

  const handleKeyDown = (event) => {
    // TODO 3.6 (optional): save on 'Enter', cancel editing on 'Escape'
  };

  if (isEditing) {
    return (
      <li>
        {/* TODO 3.5: controlled input for "title" (value, onChange, onKeyDown).
                      Bonus: add the CSS class "error" if the title is empty. */}
        <input autoFocus type="text" />
        <button onClick={save}>save</button>
        <button onClick={() => setIsEditing(false)}>cancel</button>
      </li>
    );
  }

  return (
    <li className={item.status}>
      {/* TODO 3.4: dispatch a 'toggle' action when the checkbox changes */}
      <input type="checkbox" title="mark as read" checked={item.status === 'read'} readOnly />
      {/* relative link: resolves to /list/<id> */}
      <NavLink to={String(item.id)} className="item-title">
        {item.title}
      </NavLink>
      <button onClick={startEdit}>edit</button>
      {/* TODO 3.4: dispatch a 'remove' action on click */}
      <button className="remove">remove</button>
    </li>
  );
}

export default ReadingItem;
