import React from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import UserIcon from "../common/UserIcon";

const AddUserEntry = ({ user }) => {
  const { id, name, surname } = user;

  const inviteUser = () => {
    console.log("inviting user " + id);
  };

  return (
    <Container fluid className="mb-3">
      <Row className={"align-items-center"}>
        <Col md={2}>
          <UserIcon user={user} />
        </Col>
        <Col md={4}>{name}</Col>
        <Col md={4}>{surname}</Col>
        <Col md={2}>
          <i
            className="fas fa-user-plus trello-clickable"
            onClick={inviteUser}
          ></i>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUserEntry;
