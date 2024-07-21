import React, { useEffect } from "react";
import GetUsers from "./GetUsers";

const HelperFunc = () => {
  const getUsersHelper = async () => {
    let data = await GetUsers();
    console.log(data);
  };
  useEffect(() => {
    getUsersHelper();
  }, []);
  return (
    <>
      <div>
        <h1>Helper FUnctions</h1>
      </div>
    </>
  );
};

export default HelperFunc;
