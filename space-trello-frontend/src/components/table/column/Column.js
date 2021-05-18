import React from "react";
import ColumnFooter from "./ColumnFooter";
import ColumnHeader from "./ColumnHeader";
import Card from "./card/Card";

const Column = ({ column }) => {
  const { title, cards } = column;
  return (
    <div className={"p-2 trello-column rounded"}>
      <ColumnHeader title={title} />
      {cards.map((c) => (
        <Card key={c.id} card={c} />
      ))}
      <ColumnFooter />
    </div>
  );
};

export default Column;
