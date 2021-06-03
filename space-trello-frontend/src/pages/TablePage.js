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

const TablePage = () => {
  const dispatch = useDispatch();
  const { tableId } = useParams();
  const table = useSelector((s) => s.tables.find((t) => t.tableId === tableId));
  //   if (!table) {
  //     dispatch();
  //   }

  return (
      <div></div>
    // <DndProvider backend={HTML5Backend}>
    //   <TableBackground bgImage={bgImage}>
    //     <TablePageHeader />
    //     <TablePageBody>
    //       {columns.map((column) => (
    //         <ColumnWrapper key={column.id}>
    //           <Column column={column} />
    //         </ColumnWrapper>
    //       ))}
    //       <ColumnWrapper>
    //         <AddColumnButton addColumn={addColumn} />
    //       </ColumnWrapper>
    //     </TablePageBody>
    //   </TableBackground>
    // </DndProvider>
  );
};

export default TablePage;
