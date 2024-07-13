import React, { useEffect } from "react";

const ConditionalRendering = () => {
  let age = 25;
  let name = "Gautam";
  useEffect(() => {
    // if (age > 25) {
    //   console.log("Your are eligible to Party");
    // } else if (name === "Gautam" && age === 25) {
    //   console.log("I am now full adult");
    //   console.log("I can travel world now ");
    // } else {
    //   console.log("Gautam is not my name");
    //   console.log("I cannot travel world");
    // }
    // here we are writing the if else conditional in concise way with the help of inline conditional rendering
    // age > 25 ? (
    //   console.log("you are now eligible to party")
    // ) : name === "Gautam" && age === 25 ? (
    //   <>
    //     {console.log("i am now fully adult and mature to do on my own")}
    //     {console.log("I can travel world now ")}
    //   </>
    // ) : (
    //   <>
    //     {console.log("Gautam is not my name")}
    //     {console.log("I cannot travel world")}
    //   </>
    // );
  }, []);
  return (
    <>
      <div>
        {age > 25 ? (
          <h1>I am now eligible for the party and concert</h1>
        ) : name === "Gautam" && age === 25 ? (
          <>
            <h1>i am now fully adult and mature to do on my own</h1>
            <h2>I can travel world now</h2>
          </>
        ) : (
          <>
            <h1>Gautam is not my name</h1>
            <h2>I cannot travel world</h2>
          </>
        )}
      </div>
    </>
  );
};

export default ConditionalRendering;
