import React from "react";

const Keys = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const details = [
    {
      id: 1,
      name: "Gautam",
      age: 25,
    },
    {
      id: 2,
      name: "Rintu",
      age: 24,
    },
    {
      id: 3,
      name: "Pradeep",
      age: 23,
    },
    {
      id: 4,
      name: "Rehman",
      age: 22,
    },
    {
      id: 5,
      name: "Burzin",
      age: 26,
    },
    {
      id: 6,
      name: "Abhishek",
      age: 28,
    },
  ];
  return (
    <>
      <ul>
        {details.map((details) => {
          return (
        
              <div key={details.id}>
                <li>{details.name}</li>
                <li>{details.age}</li>
              </div>
            
       
          );
        })}
      </ul>
    </>
  );
};

export default Keys;
