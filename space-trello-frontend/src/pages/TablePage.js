import React, { useState } from "react";
import Column from "../components/table/column/Column";
import TablePageHeader from "../components/table/TablePageHeader";
import AddColumnButton from "../components/table/column/AddColumnButton";
import ColumnWrapper from "../components/table/column/ColumnWrapper";
import TableBackground from "../components/table/TableBackground";
import TablePageBody from "../components/table/TablePageBody";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchTableAPI } from "../redux/api";

const TablePage = () => {
  const dispatch = useDispatch();
  const tableId = parseInt(useParams().tableId);
  const table = useSelector((s) =>
    s.tables.tables.find((t) => t.id === tableId)
  );
  if (!table) {
    dispatch(fetchTableAPI(tableId));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <TableBackground tableId={tableId}>
        <TablePageHeader tableId={tableId} />
        <TablePageBody>
          {table?.entity?.columns.map((id) => (
            <ColumnWrapper key={id}>
              <Column columnId={id} />
            </ColumnWrapper>
          ))}
          <ColumnWrapper>
            <AddColumnButton addColumn={() => {}} />
          </ColumnWrapper>
        </TablePageBody>
      </TableBackground>
    </DndProvider>
  );
};

export default TablePage;
