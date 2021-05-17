import React, { useState, useRef, useEffect } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import CardHeader from "./CardHeader";
import { useHovering } from "use-hovering";

const Card = ({ card }) => {
  const rootRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const hovering = useHovering(rootRef);
  card = {
    title: "Testowanko",
    description: "Opis mojego czegoś tam",
    date: new Date().toISOString().split("T")[0],
    categories: [
      { id: 1, color: "red" },
      { id: 2, color: "lime" },
    ],
  };

  const { title } = card;

  return (
    <React.Fragment>
      <Col ref={rootRef} className={"bg-white rounded"} style={{}}>
        <CardHeader card={card} hovering={hovering} />
        <Row style={{ fontSize: 20 }} className={"px-3 pb-3 font-weight-bold"}>
          {title}
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default Card;
