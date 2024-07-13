# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### README: Understanding States, Props, Map, Filter, and Inline Conditional Expressions in React

In React development, understanding key concepts such as states, props, map, filter, and inline conditional expressions is essential for building dynamic and efficient user interfaces. This README provides an overview of each topic, along with examples, definitions, and practical use cases.

---

#### 1. States

**Definition:** States in React are used to manage the internal state of a component. It is also knwon as state variable which is triggired within functional component and re-render so use the state wisely..
**Example:**

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </div>
  );
};

export default Counter;
```

**When to Use:** Use states when you need to store and update data within a functional component, especially when this data affects the component's rendering or behavior.

---

#### 2. Props

**Definition:** Props (short for properties) are used to pass data from a parent component to a child component in React. Props are immutable (read-only) and help create reusable components.

**Example:**
**Parent COmponent**

```jsx
import React, { useState } from "react";
import Child from "../Childeren/Child";
const Propes = () => {
  const [name, setName] = useState("Gautam Sahani");
  const changeName = () => {
    setName("Mira Sahani");
  };
  return (
    <>
      <Child valueOfProps={name} changeName={changeName} />
    </>
  );
};
export default Propes;
```

```jsx
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

**When to Use:** Use props to pass data or configuration to child components, making them more versatile and reusable across different parts of your application.

---

#### 3. Map & Filter

**Definition:** The `map` method in JavaScript is used to iterate over an array and transform its elements into new elements. In React, `map` is commonly used to render lists of elements dynamically.

**Definition:** The `filter` method in JavaScript is used to create a new array with elements that pass a certain condition. In React, `filter` is useful for rendering subsets of data based on specific criteria.

**Example:**

```jsx
import React, { useEffect, useState } from "react";

const MapFilterData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    let filterData = users.filter((user) => {
      return user.name.includes("a");
    });
    console.log(filterData);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
        <div className="w-full max-w-4xl">
          <h1 className="font-bold text-2xl mb-6 text-center">
            Users Testing the Data
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.slice(0, 6).map((user) => {
              const { street, suite, city, zipcode, geo } = user.address;
              return (
                <div
                  key={user.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h4 className="font-bold text-lg mb-2">{user.name}</h4>
                  <p className="text-gray-600">{user.username}</p>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-gray-600">
                    {street},{suite}
                  </p>
                  <p className="text-gray-600">
                    {city},{zipcode}
                  </p>
                  <p className="text-gray-600">
                    {geo.lat},{geo.lng}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              className="bg-gray-600 text-white shadow-lg shadow-amber-950 p-2 rounded-2xl text-center"
              onClick={mapData}
            >
              Click To Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapFilterData;
```

**When to Use:** Use `map` when you need to render a list of elements based on an array of data, applying transformations or extracting specific properties for rendering.

---

**When to Use:** Use `filter` when you need to display or manipulate elements in an array based on a condition, such as showing only completed tasks in a to-do list.

---

### 07/13/2024

#### 5. Inline Conditional Expressions

**Definition:** Inline conditional expressions (ternary operators) allow for conditional rendering or assignment of values inline within JSX. This enables dynamic content and behavior based on conditions.

**Example:**

```jsx
import React from "react";

const UserGreeting = ({ isLoggedIn }) => {
  return (
    <div>{isLoggedIn ? <p>Welcome back, User!</p> : <p>Please log in.</p>}</div>
  );
};

export default UserGreeting;
```

**When to Use:** Use inline conditional expressions when you need to conditionally render elements or assign values based on conditions directly within your JSX code.

---

# Conditional Rendering and Event Handling in React

## Introduction

This guide explains the basics of conditional rendering and event handling in React. These are fundamental concepts that help you create dynamic and interactive user interfaces.

## Conditional Rendering

Conditional rendering in React allows you to render different components or elements based on certain conditions. It's similar to how conditions work in JavaScript.

### Example 1: Using Ternary Operator

```jsx
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
```

_Conditional rendering in React allows you to dynamically display different elements or components based on specific conditions. This is akin to how conditions work in regular JavaScript, such as using if-else statements or ternary operators. It enables the UI to respond and change according to different states or props._

## Event Handling

Event handling in React involves responding to user interactions such as clicks, input changes, and form submissions.

### Example 1: Handling Click Events

```jsx
import React, { useState } from "react";

const EventHandling = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-200 min-h-screen flex justify-center items-center flex-col">
        <h1 className="pb-4 ">{count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="p-2 rounded-xl bg-blue-500 "
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default EventHandling;
```

### Example 2: Handling Form Submission

```jsx
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
```

### Explanation:

- **State:** `username` and `email` states are managed using the `useState` hook.
- **Event Handler:** `handleEmailChange` and `handleUsernameChange` updates the respective state based on the input name.
- **Form Submission:** `handleSubmit` prevents the default form submission and logs the input values to the console.
  _Conditional rendering in React offers a powerful and flexible way to create dynamic and responsive user interfaces. Its integration with React's component-based architecture enhances readability, maintainability, performance, and reusability, making it superior to traditional methods of handling dynamic content in web applications. By leveraging conditional rendering, developers can build more interactive and efficient applications._
