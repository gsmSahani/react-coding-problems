import React, { useState } from "react";

const FormSubmission = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username", username);
    console.log("Email", email);
  };
  return (
    <>
      <div className="bg-slate-200 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-center font-bold italic">
          Form Submission Event Handlign Example 2
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              username="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              className="my-4 p-2 rounded-lg text-center"
            />
          </div>
          <div>
            <input
              type="email"
              username="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className=" p-2 rounded-lg text-center"
            />
          </div>
          <div className="py-6 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-lg font-bold p-1 w-full hover:bg-blue-900 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSubmission;
