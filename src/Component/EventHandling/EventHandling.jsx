import React, { useState } from "react";

const EventHandling = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-200 min-h-screen flex justify-center items-center flex-col">
        <h1 className="pb-4 ">{count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="p-2 rounded-xl bg-blue-500 "
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default EventHandling;
