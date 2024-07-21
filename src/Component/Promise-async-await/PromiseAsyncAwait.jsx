import React, { useEffect } from "react";

const PromiseAsyncAwait = () => {
  const promiseExample = () => {
    const friend = new Promise((resolve, reject) => {
      let isChocolateEveryDay = false;
      if (isChocolateEveryDay) {
        resolve("Promise Resolved");
      } else {
        reject("Promise Broken");
      }
    });
    friend
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  };
  useEffect(() => {
    promiseExample();
  }, []);
  return (
    <>
      <div className="min-h-screen justify-center items-center bg-gray-900 flex">
        <h1 className="font-bold text-3xl text-white underline">Promise Async/Await</h1>
      </div>
    </>
  );
};

export default PromiseAsyncAwait;
