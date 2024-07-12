import React, { useState } from "react";
import TodoItemC from "./TodoItemC";

const TodoP = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "200 Javascript Coding Problems",
      completed: false,
    },
    {
      id: 2,
      text: "200 Output Based Javascript Questions",
      completed: false,
    },
    {
      id: 3,
      text: "55 ReactJS Project",
      completed: true,
    },
  ]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 min-h-screen">
      <div className="pb-8 font-bold text-2xl">
        <h1>Todo List For ReactJS Interview</h1>
      </div>
      {todos.map((todo) => (
        <TodoItemC key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoP;
