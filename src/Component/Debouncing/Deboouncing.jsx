import React, { useEffect, useState } from "react";
import axios from "axios";

const pinAPI = `https://api.postalpincode.in/pincode/`;

const Deboouncing = () => {
  const [pin, setPin] = useState("");

  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios
        .get(pinAPI + pin)
        .then((res) => {
          console.log(res.data[0].PostOffice);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => {
      clearTimeout(debouncing);
    };
  }, [pin]);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <input
          onChange={(e) => setPin(e.target.value)}
          placeholder="Enter YOur pin"
          className="p-2 rounded-lg"
        />
      </div>
    </>
  );
};

export default Deboouncing;
