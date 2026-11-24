import { forwardRef, useId } from 'react';

/**
 * Reusable input field with label and validation message.
 * Concepts: props with default values, the "children" prop,
 * forwardRef to pass a ref from the parent through to the <input>.
 */
const InputWithLabel = forwardRef(function InputWithLabel(
  {
    children, // label text, passed between the opening and closing tag
    value,
    onChange, // called with the new value (not with the event)
    message = '', // validation message
    type = 'text',
  },
  ref // the ref passed by the parent (second parameter, provided by forwardRef)
) {
  // useId generates a unique id per component instance to connect label and input
  const id = useId();

  return (
    <div className="input-with-label">
      <label htmlFor={id}>{children}</label>
      <input
        ref={ref}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={message ? 'error' : ''}
      />
      <output className="error-text">{message}</output>
    </div>
  );
});

export default InputWithLabel;
