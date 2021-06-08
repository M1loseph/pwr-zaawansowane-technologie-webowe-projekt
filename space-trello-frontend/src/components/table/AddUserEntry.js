import React from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAPI } from "../../redux/api";
import UserIcon from "../common/UserIcon";

const AddUserEntry = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.users.users.find((u) => u.id === userId));
  if (!user) {
    dispatch(fetchUserAPI(userId));
  }

  const inviteUser = () => {
    // console.log("inviting user " + id);
  };

  return (
    <Container fluid className="mb-3">
      <Row className={"align-items-center"}>
        <Col md={2}>
          <UserIcon userId={userId} />
        </Col>
        <Col md={4}>{user?.name}</Col>
        <Col md={4}>{user?.lastName}</Col>
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
