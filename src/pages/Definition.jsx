import React from "react";
import "./Definition.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import secondLego from "../assets/img/lego2.png";
import ovalShape from "../assets/img/oval.png";
import Testimonial from "../components/Testimonial";

export default function Definition() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col className="d-flex justify-content-end definition">
          <Image src={secondLego} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h3 className="about-definition">
            <span style={{ color: "#0b24fb" }}>Deffinition;</span> a practice or
            exercise to test or improve one's fitness for athletic competition,
            ability, or performance to exhaust (something, such as a mine) by
            working to devise, arrange, or achieve by resolving difficulties.
            Merriam-Webster.com Dictionary.
            <br />
            <br />
            <br />
            <span style={{ color: "white" }}>-weekend team</span>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className="about-shape" src={ovalShape} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>Testimonial</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <Testimonial />
        </Col>
      </Row>
    </Container>
  );
}
