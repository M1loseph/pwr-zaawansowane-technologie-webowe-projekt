import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useHovering } from "use-hovering";
import { fetchTable } from "../../redux/tablesSlice";
import { deleteTableAPI } from "../../redux/api";
import FlexRow from "../helper/FlexRow";

const TableTile = ({ tableId, allowDelete }) => {
  const dispatch = useDispatch();
  const table = useSelector((state) =>
    state.tables.find((t) => t.boardId === tableId)
  );
  const rootRef = useRef(null);
  const hovering = useHovering(rootRef);

  if (!table) {
    dispatch(fetchTable(tableId));
  }
  const deleteTable = () => {
    dispatch(deleteTableAPI(tableId));
  };

  return (
    <Link to={`/table/${tableId}`} className="m-3 my-5">
      <div
        className="trello-table-card rounded "
        style={{
          backgroundImage: table
            ? `url(/upload-images/board/${table.img})`
            : null,
        }}
        ref={rootRef}
      >
        {!!table && (
          <FlexRow className="w-100 trello-tables-page-font justify-content-between">
            <div className="rounded m-2 p-1 trello-tile-title-bg ">
              <h4 className="trello-tables-page-font m-0 my-1">
                {table.boardTitle}
              </h4>
            </div>
            {allowDelete && hovering && (
              <i
                className="fas fa-trash fa-lg m-3"
                onClick={(e) => {
                  e.preventDefault();
                  deleteTable(tableId);
                }}
              ></i>
            )}
          </FlexRow>
        )}
      </div>
    </Link>
  );
};

export default TableTile;
