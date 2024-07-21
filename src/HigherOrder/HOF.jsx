import React, { useState, useEffect } from "react";

const HOF = ({title, Component}) => {
  return function HOC() {
    const [data, setData] = useState([]);
    const getData = async () => {
      let data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err;
        });
      setData(await data.json());
    };
    useEffect(() => {
      getData();
    }, []);
    return (
      <>
        <div>
          <h1>{title}</h1>
          <Component data={data}/>
        </div>
      </>
    );
  };
};

export default HOF;
