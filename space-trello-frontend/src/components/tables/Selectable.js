import React from "react";

const Selectable = ({ children, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`trello-table-bg-container my-2 p-1 rounded ${
        selected ? "trello-selected-image-selected" : "trello-selected-image"
      }`}
    >
      {children}
    </div>
  );
};

export default Selectable;
