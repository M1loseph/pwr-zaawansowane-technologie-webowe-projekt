import React from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import UserIcon from "../../../common/UserIcon";
import Category from "./category/Category";

const CardOptionsModal = ({ showModal, setShowModal, card }) => {
  const { title, description, date, users, categories } = card;
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      backdrop="static"
      keyboard={true}
      animation={false}
      size={"lg"}
      centered
    >
      <Modal.Body>
        <Container>
          <Row className={"font-weight-bold"}>
            <i className="fas fa-list fa-lg mr-2"></i>
            {title}
          </Row>
          <Row className={"my-4"}>
            <i className="fas fa-file-alt fa-lg mr-2"></i>
          </Row>
          <Row>
            <i className="fas fa-users fa-lg mr-2"></i>
            {users.map((u) => (
              <UserIcon key={u.id} user={u} />
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className={"border-0"}>
        <Button variant="light" onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardOptionsModal;
