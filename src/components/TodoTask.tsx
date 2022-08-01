import * as React from "react";
import { ITodo } from '@pages/Home/index';

interface Props {
    todo: ITodo;
    completeTodo(todoToDelete: string): void;
}

const TodoTask = ({ todo, completeTodo }: Props) => {

 
  const handleClick = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
    console.log(event.target.checked)
  };


  return (
    <div className="todoTask">
        <h1 onClick={handleClick}>{todo.todo}</h1>
        <button onClick={() => {
            completeTodo(todo.todo);
        }}>Remove</button>
    </div>
  )
}

export default TodoTask