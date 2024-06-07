import React from "react";
import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());

  function handleIncrementStep() {
    setStep((step) => step + 1);
  }
  function handleIncrementCount() {
    setCount((count) => count + step);
  }
  function handleDecrementStep() {
    setStep((step) => step - 1);
  }
  function handleDecrementCount() {
    setCount((count) => count - step);
  }
  function dateIncrement() {
    setDate((date) => date + 1);
  }
  return (
    <div>
      <div>
        <button onClick={handleDecrementStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleIncrementStep}>+</button>
      </div>
      <div>
        <button onClick={handleDecrementCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleIncrementCount}>+</button>
      </div>
      <p>Today is {date} </p>
    </div>
  );
}
