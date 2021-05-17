import React from "react";

const ColumnHeader = ({ title }) => {
  return (
    <div className="d-flex flex-row justify-content-between ">
      <h4 className={"font-weight-bold"}>{title}</h4>
      <i className="fas fa-ellipsis-h fa-lg clickable"></i>
    </div>
  );
};

export default ColumnHeader;
