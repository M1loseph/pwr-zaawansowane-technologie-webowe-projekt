import React from "react";

const Background = ({ children }) => {
  return (
    <div className="bg-trello-primary" style={{ height: "100vh" }}>
      {children}
    </div>
  );
};

export default Background;
