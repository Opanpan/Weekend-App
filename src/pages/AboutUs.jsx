import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <Container fluid className="about-us">
      <Row>
        <Col>
          <div className="about-us-content">
            <h2>POV</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="about-us-content">
            <h2>Resource</h2>
            <h4>
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
