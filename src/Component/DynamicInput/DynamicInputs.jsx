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
  return (
    <>
      <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-center italic">Dynamic Inputs</h1>
        <form onSubmit={handleSubmit}>
            {inputs.map((input,index) =>(
            <div key={index} className="mb-4">
               <input type="text" placeholder="hello" />
            </div>
            ))}
        </form>
      </div>
    </>
  );
};

export default DynamicInputs;
