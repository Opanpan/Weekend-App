import React from "react";
import "./Definition.scss";
import { Container, Image } from "react-bootstrap";
import secondLego from "../assets/img/lego2.png";
import ovalShape from "../assets/img/oval.png";
import Testimonial from "../components/Testimonial";

export default function Definition() {
  return (
    <Container fluid className="p-0">
      <div className="image-definition d-flex justify-content-end">
        <Image src={secondLego} />
      </div>
      <div className="about-definition d-flex justify-content-center">
        <h3>
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
      </div>

      <Image
        className="about-shape"
        style={{ marginTop: 100 }}
        src={ovalShape}
      />
      <div className="d-flex justify-content-center">
        <h2>Testimonial</h2>
      </div>
      <Testimonial />
    </Container>
  );
}
