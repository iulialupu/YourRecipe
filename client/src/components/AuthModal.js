import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Field, FieldArray, reduxForm } from "redux-form";

function RegisterForm({ show, onHide }) {
  const [modalState, setModalState] = React.useState("login");

  const changeModal = () => {
    if (modalState === "login") {
      setModalState("register");
    } else if (modalState === "register") {
      setModalState("login");
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-align-center"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-align-center"
        >
          Log in to share your recipe with the world
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form />
      </Modal.Body>

      <Modal.Footer>
        {modalState === "register"
          ? "Already have an account?"
          : "Don't have an account?"}
        <Button variant="link" onClick={changeModal}>
          {modalState === "register" ? "Log in" : "Register now"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterForm;
