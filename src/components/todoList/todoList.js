import React from "react";
import TodoListItem from "../todoListItem";

const TodoList = ({todos}) => {

    const elements = todos.map((item)=>{
        return <li key={item.id}><TodoListItem {...item} /></li>
    })
    return(
      <div>
          <ul>{elements}</ul>
      </div>
    )
}
export default TodoList