import { useEffect, useRef, useState } from 'react';
import InputWithLabel from './InputWithLabel';

const emptyForm = { title: '', url: '', note: '' };

/**
 * Returns an object with an error message per invalid field.
 * A pure helper function outside the component – easy to test.
 */
function validate(form) {
  const errors = {};
  if (!form.title.trim()) {
    errors.title = 'Please enter a title';
  }
  if (!form.url.trim()) {
    errors.url = 'Please enter a URL';
  } else if (!/^https?:\/\//.test(form.url.trim())) {
    errors.url = 'URL must start with http:// or https://';
  }
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
  const titleRef = useRef(null);

  // focus the title input when the form is shown (after the first render).
  // The form is mounted every time the "Add manually" tab is opened.
  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  // never mutate state: create a new object with the changed property
  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    onAdd({ title: form.title.trim(), url: form.url.trim(), note: form.note.trim() });
    setForm(emptyForm);
    titleRef.current?.focus();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit} noValidate>
      <h3>Add an article</h3>
      <InputWithLabel
        ref={titleRef}
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
