import React from "react";
import Logo from "./Logo";

const Header = ({ children }) => {
  return (
    <div className="bg-trello-secondary">
      <div
        className={
          "justify-content-center d-flex align-items-center "
        }
      >
        <div className="trello-header-container "></div>
        <Logo />
        <div className="trello-header-container ">{children}</div>
      </div>
      <div
        className="bg-trello-primary"
        style={{
          height: 50,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      ></div>
    </div>
  );
};

export default Header;
