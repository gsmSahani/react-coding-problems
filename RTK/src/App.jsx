import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counterSlice';


function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Redux Counter App</h1>
        <div className="flex items-center justify-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className="text-4xl font-bold">{count}</span>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
