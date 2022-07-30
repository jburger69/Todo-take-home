import * as React from "react";
import { useState } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";

export default () => {
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
              />
            </div>
            <button>Add Todo</button>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
