import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">YourRecipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/recipe/create" className="nav-link">
              Add New Recipe
            </Nav.Link>
            <Nav.Link href="/user/" className="nav-link">
              My Account
            </Nav.Link>
            <Button variant="dark">Log In</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
