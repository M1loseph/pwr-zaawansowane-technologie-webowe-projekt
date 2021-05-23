import React from "react";
import Logo from "./Logo";

const Header = ({ children }) => {
  return (
    <div className="trello-header-bg">
      <div className="trello-header">
        <div className="trello-header-container mx-3"></div>
        <Logo />
        <div className="trello-header-container mx-3">{children}</div>
      </div>
      <div className="trello-header-rounding" />
    </div>
  );
};

export default Header;
