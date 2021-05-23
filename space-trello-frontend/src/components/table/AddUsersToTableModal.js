import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import DiscardButton from "../common/DiscardButton";
import AddUserEntry from "./AddUserEntry";

const AddUsersToTableModal = ({ showModal, setShowModal, allUsers }) => {
  const [filter, setFilter] = useState(/.*/g);
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
        <Modal.Title>Dodaj użytkownika do swojej tablicy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Szukaj
        <FormControl
          type="text"
          onChange={(e) => {
            const str = e.target.value;
            setFilter(new RegExp(str, "g"));
          }}
        />
        <div className="mt-3" style={{ height: 350, overflow: "auto" }}>
          {allUsers
            .filter((user) => (user.name + " " + user.lastName).match(filter))
            .map((user) => (
              <AddUserEntry key={user.id} user={user} />
            ))}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUsersToTableModal;
