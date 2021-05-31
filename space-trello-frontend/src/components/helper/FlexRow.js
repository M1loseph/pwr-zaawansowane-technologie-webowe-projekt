import React from "react";

const FlexRow = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={`d-flex flex-row align-items-center ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FlexRow;
