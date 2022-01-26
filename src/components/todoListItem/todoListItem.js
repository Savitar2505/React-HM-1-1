import React from "react";

const TodoListItem = ({id, label, done, important}) => {
  return (
      <span>{label}</span>
  )
}

export default TodoListItem