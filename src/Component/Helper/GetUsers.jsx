import React from "react";
const GetUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};
export default GetUsers;
