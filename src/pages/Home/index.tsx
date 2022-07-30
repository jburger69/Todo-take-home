import * as React from "react";
import { useState } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";

export default () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <DefaultLayout>
      <section className="bg-light">
        <Container>
          <Row>
            <h1 className="text-center">To Do List</h1>
            <div>
              <input
                type="text"
                placeholder="Todo..."
                name="todo"
                onChange={handleChange}
              />
            </div>
            <button>Add Todo</button>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
