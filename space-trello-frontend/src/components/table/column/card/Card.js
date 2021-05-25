import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import CardHeader from "./CardHeader";
import { useHovering } from "use-hovering";
import EditableField from "./helper/EditableFiels";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../common/Constants";

const Card = ({ card }) => {
  const rootRef = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const hovering = useHovering(rootRef);
  card = {
    title: "Testowanko",
    description: "Opis mojego czegoś tam",
    date: new Date().toISOString().split("T")[0],
    categories: [
      { id: 1, title: "Hello", color: "red" },
      { id: 2, title: "World", color: "lime" },
    ],
    users: [
      {
        id: 1,
        src: "https://thispersondoesnotexist.com/image",
        name: "Michał",
        surname: "Kowalski",
        color: "red",
      },
      {
        id: 2,
        src: "https://thispersondoesnotexist.com/image",
        name: "Ania",
        surname: "Kowalska",
        color: "blue",
      },
      {
        id: 3,
        src: "https://thispersondoesnotexist.com/image",
        name: "Michał",
        surname: "Kowalski",
        color: "orange",
      },
    ],
  };

  const setRefs = (ref) => {
    rootRef.current = ref;
    drag(ref);
  };

  const { title } = card;

  return (
    <div
      ref={setRefs}
      className="col bg-white rounded"
      style={{ opacity: isDragging ? 0 : 1, cursor: "grab" }}
    >
      <CardHeader card={card} hovering={hovering} />
      <Row style={{ fontSize: 20 }} className={"px-3 pb-3"}>
        <EditableField
          className="font-weight-bold"
          value={title}
          setValue={(v) => console.log(v)}
        />
      </Row>
    </div>
  );
};

export default Card;
