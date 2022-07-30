import * as React from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";

export default () => {
  return (
    <DefaultLayout>
      <section className="bg-light">
        <Container>
          <Row>
            <h1 className="text-center">To Do List</h1>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
