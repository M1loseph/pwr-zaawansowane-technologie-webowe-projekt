import React, { useState } from "react";
import { Row } from "react-bootstrap";
import CategoryMinimal from "./category/CategoryMinimal";
import CategoryOptionsModal from "./CardOptionsModal";

const CardHeader = ({ card, hovering }) => {
  const { categories } = card;
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
      <Row className={"d-flex align-items-center mt-2 pt-2 px-1"}>
        {categories.map((c) => (
          <CategoryMinimal key={c.id} category={c} />
        ))}
        {hovering && (
          <i
            onClick={() => setShowModal(true)}
            className="ml-auto fas fa-pen fa-lg trello-clickable"
          ></i>
        )}
      </Row>
      <CategoryOptionsModal
        showModal={showModal}
        setShowModal={setShowModal}
        card={card}
      />
    </React.Fragment>
  );
};

export default CardHeader;
