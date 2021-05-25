import React from "react";
import { Image } from "react-bootstrap";

const AddColumnButton = ({ addColumn }) => {
  return (
    <div
      onClick={addColumn}
      className={"trello-clickable p-2 rounded trello-table-add-column"}
    >
      <div
        style={{ fontSize: 20 }}
        className={
          "ml-3 d-flex d-row align-items-center text-white font-weight-bold"
        }
      >
        <Image width={23} className={"mr-2"} src={"/assets/addColumn.svg"} />
        Dodaj nową kolumnę
      </div>
    </div>
  );
};

export default AddColumnButton;
