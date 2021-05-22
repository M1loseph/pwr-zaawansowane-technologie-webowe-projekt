import React from "react";

const DiscardButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn trello-btn-calcel">
      {children}
    </button>
  );
};

export default DiscardButton;
