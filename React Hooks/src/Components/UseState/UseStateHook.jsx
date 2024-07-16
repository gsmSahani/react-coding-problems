import React, { useState } from "react";

const UseStateHook = () => {
  // initialize the state in object
  const [bike, setBike] = useState({
    brand: "Bajaj",
    model: "Dominor-400",
    color: "Matt Black",
    year: 2020,
  });
  const changeColor = () => {
    setBike((prev) => {
      return { ...prev, color: "purple" };
    });
  };
  // const [counter, setCounter] = useState(0);
  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <div className="min-h-screen bg-slate-200 flex flex-col justify-center items-center">
        <h1 className="text-3xl"> {bike.brand}</h1>
        <h2 className="pb-4">
          This is my Favourite bike {bike.model} which is {bike.color} which was
          launched in {bike.year}
        </h2>
        <button onClick={changeColor} className="bg-red-600 text-sm font-bold p-2 rounded-lg">Change</button>

        {/* <h1 className="mb-4 font-bold text-3xl">
          My favourite color is {counter}{" "}
        </h1>
        <button
          onClick={increment}
          className=" mb-4 bg-cyan-500 rounded-lg p-2 text-sm font-bold"
        >
          Change
        </button> */}
      </div>
    </>
  );
};

export default UseStateHook;
