import React, { useState } from "react";
import ColumnFooter from "./ColumnFooter";
import ColumnHeader from "./ColumnHeader";
import Card from "./card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchColumnAPI } from "../../../redux/api";

const Column = ({ columnId }) => {
  const dispatch = useDispatch();
  const column = useSelector((s) =>
    s.columns.columns.find((c) => c.id === columnId)
  );

  if (!column) {
    dispatch(fetchColumnAPI(columnId));
  }

  return (
    <div className={"p-2 d-flex flex-column trello-column rounded mh-100"}>
      <ColumnHeader columnId={columnId} />
      <div className="overflow-auto">
        {column?.entity?.cards.map((id) => (
          <Card key={id} cardId={id} />
        ))}
      </div>
      <ColumnFooter />
    </div>
  );
};

export default Column;
