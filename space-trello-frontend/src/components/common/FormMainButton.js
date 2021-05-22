import React from "react";

const FormMainButton = ({ children }) => {
  return (
    <button type="button" className="w-100 btn trello-btn-primary m-0 mb-1">
      {children}
    </button>
  );
};

export default FormMainButton;
