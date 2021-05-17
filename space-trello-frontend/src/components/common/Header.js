import React from "react";
import Logo from "./Logo";

const Header = ({ children }) => {
  return (
    <div className="bg-trello-secondary">
      <div
        style={{ fontSize: 40 }}
        className={
          "justify-content-center d-flex align-items-center trello-header text-white font-weight-bold"
        }
      >
        <Logo />
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
