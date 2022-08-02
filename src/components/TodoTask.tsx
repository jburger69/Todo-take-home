import * as React from "react";
import { ITodo } from '@pages/Home/index';
import '../components/TodoTask.css';
import Button from 'react-bootstrap/Button';

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
        <h3 className="taskName" onClick={handleClick}>{todo.todo}</h3>
        <Button  variant="danger" size="sm" className="removeTask" onClick={() => {
            completeTodo(todo.todo);
        }}>Remove</Button>
    </div>
  )
}

export default TodoTask