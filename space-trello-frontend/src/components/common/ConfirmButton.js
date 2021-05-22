import React from "react";

const ConfirmButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn trello-btn-primary">
      {children}
    </button>
  );
};

export default ConfirmButton;
