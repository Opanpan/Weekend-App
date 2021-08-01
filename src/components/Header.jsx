import React from "react";
import "./Header.scss";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import Logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <Navbar bg="light" variant="light" className="p-0">
      <Container>
        <Navbar.Brand>
          <Image src={Logo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <div className="header">
            <p>Good Morning</p>
            <h4>Hello Fellas</h4>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
