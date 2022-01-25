import React from "react";
import TodoHeader from "./todoHeader";
import TodoList from "./todoList";

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
export default App