// Import necessary modules from React and the CSS file
import React, { useState } from 'react';
import './Counter.css';

// Define the Counter component
const Counter = () => {
  // Define state variables 'count' and 'step' using the useState hook
  const [count, setCount] = useState(0); // Initial count value is 0
  const [step, setStep] = useState(1); // Initial step value is 1

  // Function to increment the count
  const increment = () => {
    setCount(count + step); // Increase count by the current step value
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - step); // Decrease count by the current step value
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0); // Reset count to 0
  };

  // Return the JSX for rendering the component
  return (
    <div className="counter"> {/* Main container for the counter */}
      <h1>Counter: {count}</h1> {/* Display the current count */}
      <div className="buttons"> {/* Container for the buttons */}
        <button onClick={increment}>Increment</button> {/* Button to increment the count */}
        <button onClick={decrement}>Decrement</button> {/* Button to decrement the count */}
        <button onClick={reset}>Reset</button> {/* Button to reset the count */}
      </div>
      <div className="custom-step"> {/* Container for the custom step input */}
        <label>Step: </label> {/* Label for the step input */}
        <input
          type="number"
          value={step} // Bind the input value to the step state
          onChange={(e) => setStep(Number(e.target.value))} // Update the step state on input change
        />
      </div>
    </div>
  );
};

// Export the Counter component as the default export
export default Counter;
