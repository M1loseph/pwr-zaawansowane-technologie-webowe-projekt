import React from "react";
import { Button, Container, Image, Modal, Row } from "react-bootstrap";
import UserIcon from "../../../common/UserIcon";
import Category from "./category/Category";
import CardIconContainer from "./CardIconContainer";
import FlexRow from "../../../helper/FlexRow";
import EditableField from "./helper/EditableFiels";

const CardOptionsModal = ({ showModal, setShowModal, card }) => {
  const { title, description, date, users, categories } = card;
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      keyboard={true}
      animation={false}
      size={"lg"}
      centered
    >
      <Modal.Body>
        <Container>
          <Row className={"font-weight-bold"}>
            <CardIconContainer>
              <i className="fas fa-list fa-lg mr-2"></i>
            </CardIconContainer>
            <EditableField
              className="font-weight-bold"
              value={title}
              setValue={(v) => console.log(v)}
            />
          </Row>
          <Row>
            <CardIconContainer />
            <div>
              <p className="trello-card-label-label mt-2">Etykiety</p>
              <FlexRow>
                {categories.map((c) => (
                  <Category key={c.id} category={c} />
                ))}
                <Image
                  className="ml-2 trello-clickable"
                  src="/assets/addCategoryButton.svg"
                />
              </FlexRow>
            </div>
          </Row>
          <Row className={"my-4"}>
            <CardIconContainer>
              <i className="fas fa-file-alt fa-lg mr-2"></i>
            </CardIconContainer>
            {description}
          </Row>
          <Row>
            <CardIconContainer>
              <i className="fas fa-users fa-lg mr-2"></i>
            </CardIconContainer>
            {users.map((u) => (
              <UserIcon key={u.id} user={u} />
            ))}
            <Image
              className="ml-2 trello-clickable"
              src="/assets/addUserToTaskButton.svg"
            />
          </Row>
          <Row>

          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className={"border-0"}>
        <Button variant="light" onClick={() => setShowModal(false)}>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardOptionsModal;
