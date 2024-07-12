import React, { useState } from "react";
import Child from "../Childeren/Child";
const Propes = () => {
  const [name, setName] = useState("Gautam Sahani");
  const changeName = () =>{
    setName("Mira Sahani")
  }
  return (
    <>
      <Child valueOfProps={name}  changeName={changeName}/>
    </>
  );
};

export default Propes;
