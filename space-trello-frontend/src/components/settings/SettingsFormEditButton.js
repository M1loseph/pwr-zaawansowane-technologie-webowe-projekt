import React from "react";

const SettingsFormEditButton = ({ editable, setEditable }) => {
  return (
    <button
      onClick={() => setEditable(!editable)}
      type="button"
      className="btn btn-sm trello-btn-dark "
    >
      {editable ? "EDYTUJ" : "ZAPISZ"}
    </button>
  );
};

export default SettingsFormEditButton;
