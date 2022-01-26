import React from "react";

const TodoListItem = ({id, label, done, important}) => {
  return (
      <span>{label}</span>
  )
}

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