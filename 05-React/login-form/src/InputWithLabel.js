import { useEffect, useRef } from 'react';
import './InputWithLabel.css';

const InputWithLabel = ({
  children, // label text passed as html child element 
  storeValue, // for setting input value in calling component
  initialValue, // initial value
  message, // message to display
  type = 'text', // input type with default
  focus = false /* input has focus or not */ }) => {
  
  const id = Date.now(); // id for association of label and input
  const handleChange = (event) => {
    storeValue(event.target.value);
  };
  const fieldRef = useRef();

  // set focus once if requested
  useEffect(() => {
      if (focus && fieldRef.current) {
          fieldRef.current.focus();
      }
    }, []);

  return (
    <div className="inputContainer">
      <label htmlFor={id}>{children}</label>
      <input ref={fieldRef} type={type} id={id} value={initialValue} onChange={handleChange} />
      <output>{message}</output>
    </div>
  );
};

export default InputWithLabel;