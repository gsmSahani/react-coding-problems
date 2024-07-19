import React, { useState } from "react";

const Forms = () => {
  const [objData, setObjData] = useState({});
  const getInputs = (value, name) => {
    let data = { [name]: value };
    setObjData({ ...objData, ...data });
  };
  const submit = (event) => {
    event.preventDefault();
    console.log(objData);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-300">
        <form action="" onSubmit={submit} className="flex flex-col">
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              onChange={(e) => getInputs(e.target.value, e.target.name)}
              className="p-3 my-4 rounded-lg w-full"
            />
            <input
              type="number"
              placeholder="Your Age"
              name="age"
              onChange={(e) => getInputs(e.target.value, e.target.name)}
              className="p-3 my-4 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Fields"
              name="fileds"
              onChange={(e) => getInputs(e.target.value, e.target.name)}
              className="p-3 my-4 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Stack"
              name="stack"
              onChange={(e) => getInputs(e.target.value, e.target.name)}
              className="p-3 my-4 rounded-lg w-full"
            />
            <input
              type="date"
              placeholder="Date"
              name="date"
              onChange={(e) => getInputs(e.target.value, e.target.name)}
              className="p-3 my-4 rounded-lg w-full"
            />
          </div>
          <div className="flex justify-evenly">
            <button
              type="submit"
              className="w-full bg-blue-400 p-4 mx-4 rounded-lg font-bold hover:bg-blue-900 hover:text-white"
            >
              Submit
            </button>
            <button
              type="reset"
              className="w-full bg-blue-400 p-4 mx-4 rounded-lg font-bold hover:bg-blue-900 hover:text-white"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
