import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { READY } from "../../../redux/APIStates";
import EditableField from "./card/helper/EditableFiels";
import ColumnDropdown from "./ColumnDropdown";
import ColumnOptionsHeader from "./ColumnOptionsHeader";
import OptionsListElement from "./OptionsListElement";

const ColumnHeader = ({ columnId }) => {
  const column = useSelector((s) =>
    s.columns.columns.find((c) => c.id === columnId)
  );

  const [showOptions, setShowOptions] = useState(false);
  const [title, setTitle] = useState(column?.entity?.title ?? "");

  useEffect(() => {
    if (column && column.status === READY) {
      setTitle(column.entity.title);
    }
  }, [column]);

  return (
    <div className="d-flex flex-row justify-content-between ">
      <EditableField className="h4" value={title} setValue={setTitle} />
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
