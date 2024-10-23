import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
    console.log("count increament");
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(count);
    console.log("count decreament");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Current Count: {count}</h1>
      <button onClick={increment} style={{ margin: '10px', padding: '10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '10px', padding: '10px' }}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
