import React, { useState } from "react";
import Home from "./Home";
import Profile from "./Profile";
import { UserData } from "./GlobalContext";
const ReactContextAPI = () => {
  const [name, setName] = useState("Shambhu");

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-200">
        <UserData.Provider value={{ name, setName }}>
          <Home />
          <Profile />
        </UserData.Provider>
      </div>
    </>
  );
};

export default ReactContextAPI;
