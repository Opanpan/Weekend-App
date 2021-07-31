import React from "react";
import "./Homepage.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Homepage() {
  return (
    <Container className="homepage">
      <Row>
        <Row>
          <Col>
            <h1>WEEKEND FROM HOME</h1>
            <h2>Stay active with a little workout.</h2>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
