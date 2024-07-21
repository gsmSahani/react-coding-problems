import React from "react";
import useData from "./useJSONPlaceholder";
const CustomHooks = () => {
  let { users, posts } = useData();
  return (
    <>
      <div>
        <h1>Users</h1>
        {users.map((item) => {
          return <h3>{item.name}</h3>;
        })}
        <h2>Posts</h2>
        {posts.slice(0, 10).map((item) => {
          return <h3>{item.title}</h3>;
        })}
      </div>
    </>
  );
};

export default CustomHooks;
