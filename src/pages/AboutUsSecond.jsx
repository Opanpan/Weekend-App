import React, { useEffect, useState } from "react";
import "./AboutUsSecond.scss";
import { Container, Image, Row, Col } from "react-bootstrap";
import axios from "axios";
import OvalIcon from "../assets/img/oval-icon.svg";
import Shape from "../assets/img/path.svg";

export default function Footer() {
  const [help, setHelp] = useState([]);

  useEffect(() => {
    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((response) => setHelp(response.data));
  }, []);

  return (
    <Container fluid className="p-0">
      <div className="aboutus-second">
        <Row>
          <Col>
            <div className="aboutus-second-content">
              <h2>Help & Tips</h2>
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
        <Row>
          <Col className="shape d-flex justify-content-end">
            <Image src={Shape} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="aboutus-second-content">
              <h2>You’re all set.</h2>
              <h4>
                The wise man therefore always holds in these matters to this
                principle of selection.
              </h4>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
