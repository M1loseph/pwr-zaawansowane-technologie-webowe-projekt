import React from "react";

const ColumnWrapper = ({ children }) => {
  return (
    <div className={"mx-3 trello-column-wrapper"}>{children}</div>
  );
};

export default ColumnWrapper;
