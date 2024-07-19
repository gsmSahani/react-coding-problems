import React from "react";

const CssStyles = () => {
  const internal = {
    color: "blue",
    backgroundColor: "red",
  };
  return (
    <>
      <h1 style={{ color: "purple" }}>Inline</h1>
      <h1 style={internal}>Internal</h1>
      <h1 className="external">External</h1>
    </>
  );
};

export default CssStyles;
