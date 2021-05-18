import React from "react";

const FlexRow = ({ children, className = "" }) => {
  return (
    <div className={`d-flex flex-row align-items-center ${className}`}>
      {children}
    </div>
  );
};

export default FlexRow;
