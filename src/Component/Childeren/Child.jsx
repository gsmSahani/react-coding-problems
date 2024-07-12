import React from "react";

const Child = ({ valueOfProps, changeName }) => {
  return (
    <>
      <div className="bg-slate-200 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">{valueOfProps}</h1>
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={changeName}
          >
            Change Name
          </button>
        </div>
      </div>
    </>
  );
};

export default Child;
