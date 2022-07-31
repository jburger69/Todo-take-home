import * as React from "react";
import { ITodo } from '@pages/Home/index';

interface Props {
    todo: ITodo;
    completeTodo(todoToDelete: string): void;
}

const TodoTask = ({ todo, completeTodo }: Props) => {
  return (
    <div className="todoTask">
        {todo.todo}
        <button onClick={() => {
            completeTodo(todo.todo);
        }}>Remove</button>
    </div>
  )
}

export default TodoTask