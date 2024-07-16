import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [color, setColor] = useState("blue");
  const changeColor = () => {
    setColor("red");
  };
  useEffect(() => {
    setTimeout(() => {
      console.log(`The color is now ${color}`);
    }, 2000);
  }, [color]);
  return (
    <>
      <div className="min-h-screen flex justify-center flex-col items-center bg-slate-500">
        <h1>My favourite color is {color}</h1>
        <button onClick={changeColor}>Change</button>
      </div>
    </>
  );
};

export default UseEffectHook;
