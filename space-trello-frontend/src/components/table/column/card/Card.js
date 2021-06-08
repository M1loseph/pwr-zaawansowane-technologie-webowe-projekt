import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import CardHeader from "./CardHeader";
import { useHovering } from "use-hovering";
import EditableField from "./helper/EditableFiels";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../common/Constants";
import { useDispatch, useSelector } from "react-redux";
import { READY } from "../../../../redux/APIStates";
import { fetchCardAPI } from "../../../../redux/api";

const Card = ({ cardId }) => {
  const dispatch = useDispatch();
  const rootRef = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const hovering = useHovering(rootRef);
  const setRefs = (ref) => {
    rootRef.current = ref;
    drag(ref);
  };

  const card = useSelector((s) => s.cards.cards.find((c) => c.id === cardId));
  const [cardTitle, setCardTitle] = useState(card?.entity?.title ?? "");

  useEffect(() => {
    if (!card) {
      dispatch(fetchCardAPI(cardId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (card && card.status === READY) {
      setCardTitle(card.entity.cardTitle);
    }
  }, [card]);

  return (
    <div
      ref={setRefs}
      className="col bg-white rounded"
      style={{ opacity: isDragging ? 0 : 1, cursor: "grab" }}
    >
      <CardHeader cardId={cardId} hovering={hovering} />
      <Row style={{ fontSize: 20 }} className={"px-3 pb-3"}>
        <EditableField
          className="font-weight-bold"
          value={cardTitle}
          setValue={(v) => setCardTitle(v.target.value)}
        />
      </Row>
    </div>
  );
};

export default Card;
