// Import the typed hooks
import { useAppSelector, useAppDispatch } from "../hooks";
// Import the action creators from the slice
import { increment, decrement, imcrementByAmount } from "./counterSlice";

const Counter = () => {
    // Use the typed selector to get the counter value from the store
    const count = useAppSelector((state) => state.counter.value);
    // Use the typed dispatch hook to get the dispatch function
    const dispatch = useAppDispatch();

    return (
    <div>
      <div>
        {/* Display the current count */}
        <span>Count: {count}</span>
      </div>
      <div>
        {/* Buttons to dispatch actions */}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())} // Dispatch the increment action
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())} // Dispatch the decrement action
        >
          Decrement
        </button>
        <button
          aria-label="Increment by 3"
          onClick={() => dispatch(imcrementByAmount(3))} // Dispatch with a payload
        >
          Increment by 3
        </button>
      </div>
    </div>
  );
};

export default Counter;