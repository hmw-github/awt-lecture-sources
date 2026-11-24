import { useEffect, useRef, useState } from 'react';
import InputWithLabel from './InputWithLabel';

const emptyForm = { title: '', url: '', note: '' };

/**
 * Returns an object with an error message per invalid field,
 * e.g. { title: 'Please enter a title' }. An empty object means "valid".
 * A pure helper function outside the component – easy to test.
 */
function validate(form) {
  const errors = {};
  // TODO 4.4:
  //   - title must not be empty           -> 'Please enter a title'
  //   - url must not be empty             -> 'Please enter a URL'
  //   - url must start with http(s)://    -> 'URL must start with http:// or https://'
  return errors;
}

/**
 * Form to add an article manually.
 * Concepts: controlled form with an object in state, validation,
 * useRef + useEffect to focus an input, passing a ref to a child component.
 */
function AddItemForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  // TODO 4.5: create a ref for the title input with useRef(null)

  // TODO 4.5: focus the title input after the component has been rendered (useEffect).
  //   Remark: after TODO 5.1 the form is mounted every time the tab is opened,
  //   so the focus is set every time.

  // never mutate state: create a new object with the changed property
  const updateField = (field, value) => {
    // TODO 4.3: update the property "field" of the form object
    //           (hint: computed property names { [field]: value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO 4.4: validate the form and store the result in "errors".
    //           If there are no errors: call onAdd with the trimmed values,
    //           reset the form and focus the title input again.
  };

  return (
    <form className="add-form" onSubmit={handleSubmit} noValidate>
      <h3>Add an article</h3>
      {/* TODO 4.5: pass the ref to the title input */}
      <InputWithLabel
        value={form.title}
        onChange={(value) => updateField('title', value)}
        message={errors.title}>
        Title:
      </InputWithLabel>
      <InputWithLabel
        type="url"
        value={form.url}
        onChange={(value) => updateField('url', value)}
        message={errors.url}>
        URL:
      </InputWithLabel>
      <InputWithLabel value={form.note} onChange={(value) => updateField('note', value)}>
        Note (optional):
      </InputWithLabel>
      <button>add to list</button>
    </form>
  );
}

export default AddItemForm;
