import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import OvalIcon from "../assets/img/oval-icon.svg";
import axios from "axios";
import "./AboutUs.scss";

export default function AboutUs() {
  const [help, setHelp] = useState([]);

  useEffect(() => {
    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((response) => setHelp(response.data));
  }, []);

  console.log(help);

  return (
    <Container fluid className="about-us">
      <Row>
        <Col>
          <div className="about-us-content">
            <h1>POV</h1>
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
            <h1>Resource</h1>
            <h4>
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best
            </h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="about-us-content">
            <h1>Help & Tips</h1>
          </div>
        </Col>
      </Row>
      <Row>
        {help.map((item, i) => {
          return (
            <Col>
              <div
                className="card d-flex justify-content-end"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                key={i}
              >
                <div className="card-footer d-flex justify-content-end">
                  <h5>{item.title}</h5>

                  <Image src={OvalIcon} style={{ height: 32, width: 32 }} />
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
