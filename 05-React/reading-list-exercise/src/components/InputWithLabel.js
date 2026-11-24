import { forwardRef, useId } from 'react';

/**
 * Reusable input field with label and validation message.
 * Concepts: props with default values, the "children" prop,
 * forwardRef to pass a ref from the parent through to the <input>.
 *
 * Usage:
 *   <InputWithLabel ref={myRef} value={...} onChange={(value) => ...} message="...">
 *     Title:
 *   </InputWithLabel>
 */
// TODO 4.1: destructure the props children, value, onChange, message (default '')
//           and type (default 'text').
//           Wrap the component in forwardRef so that it receives the ref as second parameter:
//           const InputWithLabel = forwardRef(function InputWithLabel({ ... }, ref) { ... });
function InputWithLabel(props) {
  // useId generates a unique id per component instance to connect label and input
  const id = useId();

  return (
    <div className="input-with-label">
      {/* TODO 4.2: render
            - a <label> for the input showing the children
            - an <input> with ref, id, type and value; onChange calls the onChange prop
              with the new value (e.target.value). CSS class "error" if there is a message.
            - <output className="error-text"> with the message */}
      <label htmlFor={id}>TODO 4.2</label>
      <input id={id} />
    </div>
  );
}

export default InputWithLabel;
