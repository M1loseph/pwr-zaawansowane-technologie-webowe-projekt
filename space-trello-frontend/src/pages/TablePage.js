import React from "react";
import Column from "../components/column/Column";
import TablePageHeader from "../components/TablePageHeader";
import AddColumnButton from "../components/column/AddColumnButton";
import ColumnWrapper from "../components/column/ColumnWrapper";

const TablePage = () => {
  const columns = [
    {
      id: 0,
      title: "Hello",
      cards: [
        { id: 1, users: [] },
        { id: 2, users: [] },
        { id: 3, users: [] },
        { id: 4, users: [] },
      ],
    },
  ];
  const bgImage = "https://i.imgur.com/IEEifKy.jpg";
  return (
    <div
      fluid
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <TablePageHeader />
      <div className={"d-flex flex-row overflow-auto pl-3"}>
        {columns.map((column) => (
          <ColumnWrapper key={column.id}>
            <Column column={column} />
          </ColumnWrapper>
        ))}
        <ColumnWrapper>
          <AddColumnButton />
        </ColumnWrapper>
      </div>
    </div>
  );
};

export default TablePage;
