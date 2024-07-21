import React from "react";
import { useContext } from "react";
import { UserData } from "./GlobalContext";
const Profile = () => {
  const { setName } = useContext(UserData);
  return (
    <>
      <div>
        <button
          onClick={() => setName("Gautam")}
          className="bg-blue-500 rounded-lg p-2"
        >
          Change the Name
        </button>
      </div>
    </>
  );
};

export default Profile;
