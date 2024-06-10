import React from "react";
import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleIncrementStep(e) {
    setStep(Number(e.target.value));
  }
  function handleIncrementCount() {
    setCount((count) => count + step);
  }
  function handleDecrementCount() {
    setCount((count) => count - step);
  }
  function countChange(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="7"
          value={step}
          onChange={handleIncrementStep}
        />
        <span>{step}</span>
        {/* <button onClick={handleDecrementStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleIncrementStep}>+</button> */}
      </div>
      <div>
        <button onClick={handleDecrementCount}>-</button>
        <span>
          <input type="text" value={count} onChange={countChange} />
        </span>
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

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
