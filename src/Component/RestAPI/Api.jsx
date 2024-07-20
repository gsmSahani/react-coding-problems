import React, { useEffect, useState } from "react";
import axios from "axios";
const Api = () => {
  const [name, setName] = useState();
  const [users, setUsers] = useState([]);
  // post request
  const postData = () => {
    axios
      .post("https://669ba9b4276e45187d361ee9.mockapi.io/user", {
        name: name,
        age: 25,
        hobbies: ["Cooking", "Travelling", "Coding", "Drawing", "Designing"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };
  //   update data
  const updateData = (id) => {
    console.log(id);
    axios
      .put(`https://669ba9b4276e45187d361ee9.mockapi.io/user/${id}`, {
        name: name,
        age: 25,
        hobbies: ["Cooking", "Travelling", "Coding", "Drawing", "Designing"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };
  // delete data
  const deleteData = (id) => {
    console.log(id);
    axios
      .delete(`https://669ba9b4276e45187d361ee9.mockapi.io/user/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };
  const getData = () => {
    console.log(id);
    axios
      .delete("https://669ba9b4276e45187d361ee9.mockapi.io/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };
  useEffect(() => {
    //   getting data
    axios
      .get("https://669ba9b4276e45187d361ee9.mockapi.io/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);
  return (
    <>
      <div className="min-h-screen justify-center items-center flex flex-col bg-slate-200 ">
        <input
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          className="mb-4 rounded-lg p-3 bottom-full"
        />
        <button
          onClick={postData}
          className="bg-blue-500 rounded-lg p-2 font-bold"
        >
          Post Data
        </button>
        <div className="flex flex-wrap justify-center items-center">
          {users.map((user) => {
            return (
              <>
                <div className="flex flex-wrap flex-col px-4 mt-8">
                  <h1>{`${user.id}. ${user.name}`}</h1>
                  <button
                    onClick={() => updateData(user.id)}
                    className="bg-blue-500 rounded-lg p-2 font-bold mb-4"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteData(user.id)}
                    className="bg-blue-500 rounded-lg p-2 font-bold mb-4"
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Api;
// we have mainly 4 types of request GET,POST,PUT,PATCH & DELETE
