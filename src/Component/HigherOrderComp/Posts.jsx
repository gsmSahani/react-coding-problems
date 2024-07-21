import React from "react";
import HOF from "../../HigherOrder/HOF";
const Posts = ({ data }) => {
  return (
    <>
      <div>
        <h2>Hello from posts</h2>
        {data.slice(0, 10).map((user) => {
          return <p>{user.title}</p>;
        })}
      </div>
    </>
  );
};

// export default Posts;
const PostComps = HOF("Posts", Posts);
export default PostComps;
