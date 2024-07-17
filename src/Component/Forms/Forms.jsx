import React, { useState } from "react";

const Forms = () => {
  const [objData, setObjData] = useState({});
  const getInputs = (value, name) => {
    let data = { [name]: value };
    setObjData({ ...objData, ...data });
  };
  console.log(objData);
  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <input
          type="number"
          placeholder="Your Age"
          name="age"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <input
          type="text"
          placeholder="Fields"
          name="fileds"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <input
          type="text"
          placeholder="Stack"
          name="stack"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <input
          type="date"
          placeholder="Date"
          name="date"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
      </div>
    </>
  );
};

export default Forms;
