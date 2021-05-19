import React from "react";

const SettingsFormEditButton = ({ setEdit }) => {
  return (
    <button
      onClick={() => setEdit(true)}
      type="button"
      className="btn trello-btn-dark "
    >
      EDYTUJ
    </button>
  );
};

export default SettingsFormEditButton;
