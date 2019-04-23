import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import logo from "../img/logo-dark.svg";
import AuthModal from "./AuthModal";
import { getUser, logout } from "../actions/authActions";

function Header({ auth, getUser, logout }) {
  const [modalIsOpen, setModalState] = React.useState(false);

  React.useEffect(() => {
    getUser();
  }, []);

  const modalClose = () => setModalState(false);

  const renderLinks = () => {
    return (
      <>
        <Nav.Link href="/recipe/create" className="nav-link">
          <i className="fas fa-plus" /> Add New Recipe
        </Nav.Link>
        <Nav.Link href="/user/" className="nav-link">
          <i className="fas fa-user" /> {`Welcome, ${auth.user.name}`}
        </Nav.Link>
        <Button variant="dark" onClick={logout}>
          Log Out
        </Button>
      </>
    );
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img className="nav-logo" src={logo} alt="Your Recipe Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {auth.isAuthenticated ? (
              renderLinks()
            ) : (
              <Button variant="dark" onClick={() => setModalState(true)}>
                Log In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AuthModal show={modalIsOpen} onHide={modalClose} />
    </header>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUser, logout }
)(Header);
