import React from "react";

const ControlUncontrolledComp = () => {
  let name = React.createRef();
  let age = React.createRef();
  const submit = () => {
    console.log(name)
    console.log(age)
  };

  const getName = (e) => {
    console.log(e.target.value);
  };
  const getAge = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      {/* uncontrolled component */}
      {/* <input placeholder="name" ref={name} />
      <input placeholder="age" ref={age} />
      <button onClick={submit}>Submit</button> */}

      {/* controlled components */}
      <input placeholder="name" onChange={getName} />
      <input placeholder="age" onChange={getAge} />
      <button onClick={submit}>Submit</button>
    </>
  );
};

export default ControlUncontrolledComp;
