import React, { useRef, useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsersAPI } from "../../redux/api";
import { READY } from "../../redux/APIStates";
import DiscardButton from "../common/DiscardButton";
import AddUserEntry from "./AddUserEntry";

const AddUsersToTableModal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(/.*/g);
  const users = useSelector((s) => s.users);
  const fetch = useRef(true);

  if (fetch.current) {
    dispatch(fetchAllUsersAPI());
    fetch.current = false;
  }

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      keyboard={true}
      animation={false}
      centered
    >
      <Modal.Header className="trello-white-modal" closeButton>
        <Modal.Title>Dodaj użytkownika do swojej tablicy</Modal.Title>
      </Modal.Header>
      <Modal.Body className="trello-white-modal">
        Szukaj
        <FormControl
          type="text"
          onChange={(e) => {
            const str = e.target.value;
            setFilter(new RegExp(str, "g"));
          }}
        />
        <div className="mt-3" style={{ height: 350, overflow: "auto" }}>
          {/* {users?.users
            .filter((u) => u.status === READY)
            .map((u) => u.entity)
            .filter((user) =>
              (user.firstName + " " + user.lastName).match(filter)
            )
            .map((user) => (
              <AddUserEntry key={user.userId} userId={user.userId} />
            ))} */}
        </div>
      </Modal.Body>

      <Modal.Footer className="trello-white-modal">
        <Button onClick={() => setShowModal(false)}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUsersToTableModal;
