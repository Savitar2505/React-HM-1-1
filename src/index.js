import React from 'react';
import ReactDOM from 'react-dom';


const TodoSearch = () => {
  return(
      <div>
          <input type="text"/>
      </div>
  )
}

const TodoStatusFilter = () => {
  return(
      <div>
          <button>All</button>
          <button>Active</button>
          <button>Done</button>
      </div>
  )
}

const TodoHeader = () => {
  return (
      <div>
          <TodoSearch />
          <TodoStatusFilter/>
      </div>
  )
}
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

const App = () => {

    const todos = [
        {id: 1, label:'drink tea', done: false, important:false},
        {id: 2, label:'drink coffee', done: false, important:false},
        {id: 3, label:'learn react', done: false, important:false},
        {id: 4, label:'drink vodka', done: false, important:false}
    ]

    return(
        <div>
            <TodoHeader />
            <TodoList todos={todos}/>
        </div>
    )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
