import React from "react";
import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

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
  const date = new Date();
  date.setDate(date.getDate() + count);

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
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
