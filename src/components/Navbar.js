import React from "react";

import {
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

import Octicon, { MarkGithub, LogoGithub } from "@githubprimer/octicons-react";

export default () => (
  <Navbar bg="primary" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="/">Brandon Dyer</Navbar.Brand>
      <Nav className="justify-content-end">
        <a
          href="https://github.com/BrandonDyer64"
          style={{ color: "white" }}
          target="_blank"
        >
          <Octicon icon={MarkGithub} />
          &nbsp;
          <Octicon icon={LogoGithub} />
        </a>
      </Nav>
    </Container>
  </Navbar>
);
