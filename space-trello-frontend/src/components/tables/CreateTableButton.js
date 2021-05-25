import React from "react";
import { Image } from "react-bootstrap";

const CreateTableButton = () => {
  return (
    <div className="trello-table-card rounded trello-add-table m-3 my-5 d-flex justify-content-center align-items-center">
      <Image width={25} className="mr-2" src="/assets/addTableIcon.svg" />
      <p></p>Dodaj nową tablicę
    </div>
  );
};

export default CreateTableButton;
