import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 * Lets the user edit the note of an item.
 * The draft lives in local state, initialised from the item's note.
 */
function NoteEditor({ item, onSave }) {
  const [note, setNote] = useState(item.note);
  const changed = note !== item.note;

  return (
    <>
      <label htmlFor="note">Note</label>
      <textarea id="note" rows="4" value={note} onChange={(e) => setNote(e.target.value)} />
      <button disabled={!changed} onClick={() => onSave(note)}>
        save note
      </button>
    </>
  );
}

/**
 * Detail view for one item, rendered by the nested route /list/:id.
 * Concepts: route parameters with useParams, programmatic navigation
 * with useNavigate, resetting component state with the "key" prop.
 */
function ItemDetails({ items, dispatch }) {
  // TODO 6.3: read the route parameter "id" with useParams()
  //           and find the matching item (careful: route parameters are strings!)
  const id = '?';
  const item = undefined;
  // TODO 6.4: get the navigate function with useNavigate()

  if (!item) {
    return (
      <aside className="details">
        <p>Item {id} does not exist (anymore).</p>
        {/* TODO 6.4: navigate to /list on click */}
        <button>close</button>
      </aside>
    );
  }

  // TODO 6.5: dispatch an 'update' action that changes the note of the item
  const saveNote = (note) => {};

  return (
    <aside className="details">
      <h3>{item.title}</h3>
      <p>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.url}
        </a>
      </p>
      <p>Status: <strong>{item.status}</strong></p>
      {/* TODO 6.6: type into the note of item 1, then click on item 2 in the list:
                    the draft of item 1 is still shown! Why? Fix it with the key prop. */}
      <NoteEditor item={item} onSave={saveNote} />
      {/* TODO 6.4: navigate to /list on click */}
      <button>close</button>
    </aside>
  );
}

export default ItemDetails;
