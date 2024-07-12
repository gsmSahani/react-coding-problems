import React from "react";

const TodoItemC = ({ todo, toggleTodo }) => {
  const { id, text, completed } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <div>
      <li style={{ textDecoration: completed ? "line-through" : "none" }}>
        <input type="checkbox" checked={completed} onChange={handleToggle} />
        <span>{text}</span>
      </li>
    </div>
  );
};

export default TodoItemC;
