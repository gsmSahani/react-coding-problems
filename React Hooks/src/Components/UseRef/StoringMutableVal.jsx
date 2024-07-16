import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";

const StoringMutableVal = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current++;
  }, []);
  return (
    <>
      <p>Count:{count}</p>
      <p>Render COunt: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default StoringMutableVal;
