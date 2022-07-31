import * as React from "react";
import { ITodo } from '@pages/Home/index';

interface Props {
    todo: ITodo;
}

const TodoTask = ({ todo }: Props) => {
  return (
    <div className="todoTask">
        {todo.todo}
    </div>
  )
}

export default TodoTask