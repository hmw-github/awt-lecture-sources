import { useState } from 'react';

function Counter() {
  console.log('Counter actice...');
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      Counter: {count}<br />
      <button onClick={inc}>increment</button>
    </>
  );
}

export default Counter;