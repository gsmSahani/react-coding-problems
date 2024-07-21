import React from "react";
import { useContext } from "react";
import { UserData } from "./GlobalContext";
const Home = () => {
  let { name } = useContext(UserData);
  return (
    <>
      <div>
        <h1 className="pb-4">This is the {name}</h1>
      </div>
    </>
  );
};

export default Home;
