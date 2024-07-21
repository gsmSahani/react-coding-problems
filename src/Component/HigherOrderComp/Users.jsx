import React from "react";
import HOF from "../../HigherOrder/HOF";
const Users = ({data}) => {
  return (
    <>
      <div>
        <h1>Hello from usres</h1>
        {data.slice(0, 10).map((user) => {
          return <p>{user.name}</p>;
        })}
      </div>
    </>
  );
};

// export default Users;
const UsersComp = HOF("Users", Users);
export default UsersComp;
