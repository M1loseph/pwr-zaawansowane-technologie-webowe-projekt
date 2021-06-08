import React, { useEffect } from "react";
import { Button, Container, Image, Modal, Row } from "react-bootstrap";
import UserIcon from "../../../common/UserIcon";
import Category from "./category/Category";
import CardIconContainer from "./CardIconContainer";
import FlexRow from "../../../helper/FlexRow";
import EditableField from "./helper/EditableFiels";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardAPI } from "../../../../redux/api";
import AssignemntIcon from "./AssignmentIcon";
import { READY } from "../../../../redux/APIStates";

const CardOptionsModal = ({ showModal, setShowModal, cardId }) => {
  const dispatch = useDispatch();
  const card = useSelector((s) => s.cards.cards.find((c) => c.id === cardId));
  useEffect(() => {
    if (!card) {
      dispatch(fetchCardAPI(cardId));
    }
  }, [dispatch]);
  if (card?.status === READY) {
    const { cardTitle, description, date, assignments, categories } =
      card.entity;
    return (
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        keyboard={true}
        animation={false}
        size={"lg"}
        centered
      >
        <Modal.Body className="trello-white-modal">
          <Container>
            <Row className={"font-weight-bold"}>
              <CardIconContainer>
                <i className="fas fa-list fa-lg mr-2"></i>
              </CardIconContainer>
              <EditableField
                className="font-weight-bold h4"
                value={cardTitle}
                setValue={(v) => console.log(v)}
              />
            </Row>
            <Row>
              <CardIconContainer />
              <div>
                <p className="trello-card-label-label mt-2">Etykiety</p>
                <FlexRow>
                  {categories.map((id) => (
                    <Category key={id} categoryId={id} />
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
              {/* {assignments.map((id) => (
              <UserIcon key={id} user={id} />
            ))} */}
              <Image
                className="ml-2 trello-clickable"
                src="/assets/addUserToTaskButton.svg"
              />
            </Row>
            <Row></Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className={"border-0 trello-white-modal"}>
          <Button variant="light" onClick={() => setShowModal(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return null;
  }
};

export default CardOptionsModal;
