import React, { useEffect } from "react";

const Questions = () => {
  const funcArray = [
    // 1st array function
    function funcA(a, b) {
      return a + b;
    },
    // 2nd array function
    function funcB(a, b) {
      return a - b;
    },
    // 3nd array function
    function funcB(a, b) {
      return a * b;
    },
    // 4nd array function
    function funcB(a, b) {
      return a / b;
    },
  ];
  const mainFunc = () => {
    let result = funcArray.map((func) => {
      return func(5, 10);
    });
    console.log(result);
  };
  useEffect(() => {
    mainFunc();
  }, []);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col bg-slate-950">
        <h1 className="font-bold text-center text-gray-300">Zomato</h1>
        <p className="italic text-center font-medium text-orange-400">
          <span className="font-bold text-white underline">Questions: </span>
          Write a function which takes an array of multiple functions and
          executes them one by one,in left to right manner?
        </p>
      </div>
    </>
  );
};

export default Questions;
