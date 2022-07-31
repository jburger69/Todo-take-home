import * as React from "react";
import { useState, ChangeEvent } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";
import TodoTask from "@components/TodoTask";

export interface ITodo {
  todo: string;
}

export default () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value)
  }

  const addTodo = (): void => {
    const newTodo = {todo: todo};
    setTodoList([...todoList, newTodo]);
    setTodo("");
    console.log(todoList)
  }

  return (
    <DefaultLayout>
      <section className="bg-light">
        <Container>
          <Row>
            <div className="formContainer">
              <h1 className="text-center">To Do List</h1>
              <div>
                <input
                  type="text"
                  placeholder="Todo..."
                  name="todo"
                  value={todo}
                  onChange={handleChange}
                />
              </div>
              <button onClick={addTodo}>Add Todo</button>
            </div>
            <div className="todoList">
              {todoList.map((todo: ITodo, key: number) => {
                return <TodoTask key={key} />
              })}
            </div>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
