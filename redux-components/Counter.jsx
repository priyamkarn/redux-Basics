import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './CreateSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);  // Access counter state from Redux store
  const dispatch = useDispatch();  // Get the dispatch function to dispatch actions
  const [amount, setAmount] = useState(0);  // Local state to capture input value

  const handleIncrement = () => {
    dispatch(increment());  // Dispatch the increment action
  };

  const handleDecrement = () => {
    dispatch(decrement());  // Dispatch the decrement action
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(Number(amount)));  // Dispatch the incrementByAmount action with input value
  };

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}  // Update local state
      />
      <button onClick={handleIncrementByAmount}>Increment by Amount</button>
    </div>
  );
};

export default Counter;
