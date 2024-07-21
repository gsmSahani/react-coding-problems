import React from "react";
import Users from "./Users";
import Posts from "./Posts";
const HigherOrderComp = () => {
  return (
    <>
      <div>
        <Users />
        <Posts />
      </div>
    </>
  );
};

export default HigherOrderComp;
