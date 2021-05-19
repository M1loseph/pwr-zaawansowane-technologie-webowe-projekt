import React from "react";

const TableBackground = ({ children, bgImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
      className="d-flex flex-column"
    >
      {children}
    </div>
  );
};

export default TableBackground;
