import React, { useEffect, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHovering } from "use-hovering";
import FlexRow from "../helper/FlexRow";

const TableTile = ({ table, deleteTable }) => {
  const { bgImage, title, id } = table;
  const rootRef = useRef(null);
  const hovering = useHovering(rootRef);

  return (
    <Link to="/table" className="m-3 my-5">
      <div
        className="trello-table-card rounded"
        style={{ backgroundImage: `url(${bgImage})` }}
        ref={rootRef}
      >
        <FlexRow className="w-100 trello-tables-page-font justify-content-between">
          <div className="rounded m-2 p-1 trello-tile-title-bg ">
            <h4 className="trello-tables-page-font m-0 my-1">{title}</h4>
          </div>
          {!!deleteTable && hovering && (
            <i
              className="fas fa-trash fa-lg m-3"
              onClick={(e) => {
                e.preventDefault();
                deleteTable(id);
              }}
            ></i>
          )}
        </FlexRow>
      </div>
    </Link>
  );
};

export default TableTile;
