import * as React from "react";
import { useState, ChangeEvent } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";
import TodoTask from "@components/TodoTask";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
  }

  const completeTodo = (todoToDelete: string): void => {
    setTodoList(todoList.filter((todo) => {
      return todo.todo != todoToDelete;
    }))
  }

  return (
    <DefaultLayout>
      <section className="bg-light">
        <Container>
          <Row>
          <h1 className="text-center" style={{margin: "50px"}}>To Do List</h1>
            <div className="formContainer" style={{margin: "3%"}}>
              <div>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Add Name of Task.."
                    name="todo"
                    value={todo}
                    onChange={handleChange}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button onClick={addTodo} variant="outline-secondary">
                    Add Todo
                  </Button>
                </InputGroup>
              </div>
            </div>
            <div className="todoList">
              {todoList.map((todo: ITodo, key: number) => {
                return <TodoTask key={key} todo={todo} completeTodo={completeTodo} />
              })}
            </div>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
