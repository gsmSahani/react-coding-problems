import React, { useRef } from "react";

const FocusInputField = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Focus on me" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default FocusInputField;
