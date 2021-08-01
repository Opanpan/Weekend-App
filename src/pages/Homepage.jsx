import React from "react";
import "./Homepage.scss";
import Logo from "../assets/img/lego.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function Homepage() {
  return (
    <Container fluid className="homepage">
      <Row>
        <Col>
          <h1>WEEKEND FROM HOME</h1>
          <h2>Stay active with a little workout.</h2>
          <Image src={Logo} />
          <Button className="button" variant="light">
            <p>Let's Go</p>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
