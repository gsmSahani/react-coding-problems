import React, { useEffect } from "react";

const PromiseAsyncAwait2 = () => {
  const Dominor = (paramDominor) => {
    return new Promise((resolve, reject) => {
      if (paramDominor === "Dominor-400") {
        resolve("Dream Fullfilled Lets Go for India Tour");
      } else {
        reject("Failed But Work Hard and Travel...but travel");
      }
    });
  };
  const BMWGS1250 = (paramBMW) => {
    return new Promise((resolve, reject) => {
      if (paramBMW === "BMWGS-1250") {
        resolve("World Tour");
      } else {
        reject("Or else you have Dominor Enjoy with it NO worries");
      }
    });
  };
  const promisChain = async () => {
    let res = await Dominor("Dominor-400");
    console.log(res);
    // Dominor("Dominor-400")
    //   .then((fresponse) => {
    //     console.log(fresponse);
    //     return BMWGS1250(fresponse);
    //   })
    //   .then((sresponse) => {
    //     console.log(sresponse);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  useEffect(() => {
    promisChain();
    BMWGS1250();
  }, []);
  return (
    <>
      <div>
        <h1>2nd Example of Promise Async/Await</h1>
      </div>
    </>
  );
};

export default PromiseAsyncAwait2;
