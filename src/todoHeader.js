import React from "react";
import TodoSearch from "./todoSearch";
import TodoStatusFilter from "./todoStatusFilter";

const TodoHeader = () => {
  return (
      <div>
          <TodoSearch />
          <TodoStatusFilter/>
      </div>
  )
}
export default TodoHeader