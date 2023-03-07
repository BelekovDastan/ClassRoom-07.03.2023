import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    if (true) {
      setCounter(counter + 1);
    }
  }

  function decrement() {
    if (true) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h1>Счётчик</h1>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
