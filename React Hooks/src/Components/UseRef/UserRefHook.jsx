import React, { useRef } from "react";

const UserRefHook = () => {
  const inputElem = useRef();
  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "purple";
  };
  return (
    <>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}>Click Here</button>
    </>
  );
};

export default UserRefHook;
