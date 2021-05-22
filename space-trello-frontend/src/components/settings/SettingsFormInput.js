import React from "react";

const SettingsFromInput = ({ children, className = "" }) => {
  return (
    <div className="w-75 ">
      <p className={`trello-settings-font ${className}`}>{children}</p>
    </div>
  );
};

export default SettingsFromInput;
