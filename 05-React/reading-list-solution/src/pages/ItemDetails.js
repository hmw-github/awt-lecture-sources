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
  const { id } = useParams(); // route parameters are always strings
  const navigate = useNavigate();
  const item = items.find((i) => i.id === Number(id));

  if (!item) {
    return (
      <aside className="details">
        <p>Item {id} does not exist (anymore).</p>
        <button onClick={() => navigate('/list')}>close</button>
      </aside>
    );
  }

  const saveNote = (note) => dispatch({ type: 'update', item: { id: item.id, note } });

  return (
    <aside className="details">
      <h3>{item.title}</h3>
      <p>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.url}
        </a>
      </p>
      <p>Status: <strong>{item.status}</strong></p>
      {/* Without key, React would reuse the NoteEditor (and its draft state)
          when navigating from /list/1 to /list/2. A new key creates a fresh
          component instance with a fresh state. */}
      <NoteEditor key={item.id} item={item} onSave={saveNote} />
      <button onClick={() => navigate('/list')}>close</button>
    </aside>
  );
}

export default ItemDetails;
