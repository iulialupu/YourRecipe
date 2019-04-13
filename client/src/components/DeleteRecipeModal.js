import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import { deleteRecipe } from "../actions/recipeActions";

function DeleteRecipeModal(props) {
  const { deleteRecipe, id, title } = props;

  const onDeleteClick = () => {
    deleteRecipe(id);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        closeButton
        style={{ borderBottom: "none", padding: "2rem 2.5rem" }}
      >
        <h5>{`Are you sure you want to delete ${title} recipe?`}</h5>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none", padding: "1rem 2rem" }}>
        <Button variant="danger" onClick={onDeleteClick}>
          Delete
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect(
  null,
  { deleteRecipe }
)(DeleteRecipeModal);
