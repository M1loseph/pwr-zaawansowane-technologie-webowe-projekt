import React, { useState } from "react";
import ColumnDropdown from "./ColumnDropdown";
import ColumnOptionsHeader from "./ColumnOptionsHeader";
import OptionsListElement from "./OptionsListElement";

const ColumnHeader = ({ title }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="d-flex flex-row justify-content-between ">
      <h4 className={"font-weight-bold"}>{title}</h4>
      <div className="trello-dropdown-toggler ">
        <i
          onClick={() => setShowOptions(!showOptions)}
          className="fas fa-ellipsis-h fa-lg trello-clickable"
        ></i>
        <ColumnDropdown show={showOptions} setShow={setShowOptions}>
          <ColumnOptionsHeader>Opcje kolumny</ColumnOptionsHeader>
          <hr />
          <OptionsListElement>Usuń</OptionsListElement>
        </ColumnDropdown>
      </div>
    </div>
  );
};

export default ColumnHeader;
