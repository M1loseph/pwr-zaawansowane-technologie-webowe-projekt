import React, { useState } from "react";
import { Row } from "react-bootstrap";
import CategoryMinimal from "./category/CategoryMinimal";
import CardOptionsModal from "./CardOptionsModal";
import { useSelector } from "react-redux";

const CardHeader = ({ cardId, hovering }) => {
  const card = useSelector((s) => s.cards.cards.find((c) => c.id === cardId));
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
      <Row className={"d-flex align-items-center mt-2 pt-2 px-1"}>
        {card?.entity?.categories?.map((id) => (
          <CategoryMinimal key={id} categoryId={id} />
        ))}
        <i
          onClick={() => setShowModal(true)}
          className="ml-auto fas fa-pen fa-lg trello-clickable"
          style={{ visibility: hovering ? "visible" : "hidden" }}
        ></i>
      </Row>
      <CardOptionsModal
        showModal={showModal}
        setShowModal={setShowModal}
        cardId={cardId}
      />
    </React.Fragment>
  );
};

export default CardHeader;
