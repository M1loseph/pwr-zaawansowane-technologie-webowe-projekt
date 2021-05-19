import React from "react";
import ColumnFooter from "./ColumnFooter";
import ColumnHeader from "./ColumnHeader";
import Card from "./card/Card";

const Column = ({ column }) => {
  const { title, cards } = column;
  return (
    <div className={"p-2 d-flex flex-column trello-column rounded mh-100"}>
      <ColumnHeader title={title} />
      <div className="overflow-auto">
        {cards.map((c) => (
          <Card key={c.id} card={c} />
        ))}
      </div>
      <ColumnFooter />
    </div>
  );
};

export default Column;
