import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddUserEntry from "./AddUserEntry";

const AddUsersToTableModal = ({ showModal, setShowModal, allUsers }) => {
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      backdrop="static"
      keyboard={true}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add new user to your board</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ maxHeight: 350, overflow: "auto" }}>
        {allUsers.map((user) => (
          <AddUserEntry key={user.id} user={user} />
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUsersToTableModal;
