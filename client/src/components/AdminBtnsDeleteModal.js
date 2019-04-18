import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import DeleteRecipeModal from "./DeleteRecipeModal";

function AdminBtnDeleteModal({ id, title }) {
  const [modalIsOpen, setModalState] = React.useState(false);
  const modalClose = () => setModalState(false);

  return (
    <>
      <div className="admin-btns d-flex justify-content-center">
        <Link to={`/recipe/edit/${id}`} className="btn btn-secondary mr-2 px-4">
          Edit
        </Link>
        <Button
          variant="dark"
          className="px-3"
          onClick={() => setModalState(true)}
        >
          Delete
        </Button>
      </div>

      <DeleteRecipeModal
        id={id}
        title={title}
        show={modalIsOpen}
        onHide={modalClose}
      />
    </>
  );
}

export default AdminBtnDeleteModal;
