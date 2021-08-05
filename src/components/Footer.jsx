import React from "react";
import "./Footer.scss";
import { Container, Image } from "react-bootstrap";
import Lego from "../assets/img/lego3.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-start" style={{ width: "100%" }}>
        <Image className="footer-image" src={Lego} />
      </div>
      <div className="d-flex align-items-end footer-container">
        <Container
          fluid
          className="footer-content d-flex align-items-center d-flex justify-content-center"
        >
          <div>
            <h5>
              wknd@<span style={{ fontWeight: "normal" }}>2020</span>
            </h5>
          </div>
          <div>
            <p>alpha version 0.1</p>
          </div>
        </Container>
      </div>
    </div>
  );
}
