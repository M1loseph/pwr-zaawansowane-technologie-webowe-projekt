import React, { useEffect, useState } from "react";
import ColumnDropdown from "./ColumnDropdown";
import ColumnOptionsHeader from "./ColumnOptionsHeader";
import OptionsListElement from "./OptionsListElement";

const ColumnHeader = ({ title, setTitle }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [disabledEdit, setDisabledEdit] = useState(true);
  useEffect(() => {
    console.log(disabledEdit);
  }, [disabledEdit]);
  return (
    <div className="d-flex flex-row justify-content-between ">
      <input
        type="text"
        className="h4 trello-table-name "
        value={title}
        readOnly={disabledEdit}
        onDoubleClick={() => setDisabledEdit(false)}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={() => setDisabledEdit(true)}
        onKeyPress={(e) => {
          const { key } = e;
          if (key === "Enter") {
            setDisabledEdit(true);
          }
        }}
      />
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
