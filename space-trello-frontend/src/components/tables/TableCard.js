import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useHovering } from "use-hovering";
import FlexRow from "../helper/FlexRow";

const TableCard = ({ table, deleteTable }) => {
  const { bgImage, title, id } = table;
  const rootRef = useRef(null);
  const hovering = useHovering(rootRef);

  return (
    <Link to="/table">
      <div
        className="trello-table-card m-3 my-5 rounded"
        style={{ backgroundImage: `url(${bgImage})` }}
        ref={rootRef}
      >
        <FlexRow className="w-100 trello-tables-page-font justify-content-between">
          <div className="rounded m-2 p-1">
            <h4 className="trello-tables-page-font">{title}</h4>
          </div>
          {hovering && (
            <i
              className="fas fa-trash fa-lg m-3"
              onClick={(e) => {
                  e.preventDefault()
                deleteTable(id);
              }}
            ></i>
          )}
        </FlexRow>
      </div>
    </Link>
  );
};

export default TableCard;
