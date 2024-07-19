import React, { useState } from "react";

const DynamicInputs = () => {
  const [inputs, setInputs] = useState([
    {
      name: "",
      username: "",
      email: "",
      mobile: "",
      password: "",
    },
  ]);
  const getInputValues = (data) => {
    console.log(data.target.name);
  };
  const handleSubmit = () => {};
  return (
    <>
      <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-center italic">Dynamic Inputs</h1>
        <div className="max-w-md w-full">
          <form onSubmit={handleSubmit} className="">
            {inputs.map((input, index) => (
              <div key={index} className="mb-4 flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={getInputValues}
                  className="p-2 my-4 rounded-lg"
                />
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={getInputValues}
                  className="p-2 my-4 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={getInputValues}
                  className="p-2 my-4 rounded-lg"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={getInputValues}
                  className="p-2 my-4 rounded-lg"
                />
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
};

export default DynamicInputs;
