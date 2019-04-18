import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import logo from "../img/logo-dark.svg";
import AuthModal from "./AuthModal";

function Header() {
  const [modalIsOpen, setModalState] = React.useState(false);
  const modalClose = () => setModalState(false);

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img className="nav-logo" src={logo} alt="Your Recipe Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/recipe/create" className="nav-link">
              <i className="fas fa-plus" /> Add New Recipe
            </Nav.Link>
            <Nav.Link href="/user/" className="nav-link">
              <i className="fas fa-user" /> My Account
            </Nav.Link>
            <Button variant="dark" onClick={() => setModalState(true)}>
              Log In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AuthModal show={modalIsOpen} onHide={modalClose} />
    </header>
  );
}

export default Header;
