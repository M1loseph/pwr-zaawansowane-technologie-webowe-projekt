import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ColumnFooter = () => {
  return (
    <Row
      className={"align-items-center d-flex trello-clickable h5 column-add-text m-0 mt-2"}
    >
      <Image src={"/assets/addCard.svg"} width={20} className={"mr-2"} />
      Dodaj kolejną kartę
    </Row>
  );
};

export default ColumnFooter;
