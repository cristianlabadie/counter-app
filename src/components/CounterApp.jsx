import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  let [counter, setCounter] = useState(value);
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid="test-counter">{counter}</h2>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button aria-label="btn-reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
