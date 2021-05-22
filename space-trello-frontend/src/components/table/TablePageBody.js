import React from "react";

const TablePageBody = ({ children }) => {
  return (
    <div
      style={{ flex: 1 }}
      className={"d-flex flex-row h-100 overflow-auto pl-3 pb-5"}
    >
      {children}
    </div>
  );
};

export default TablePageBody;
