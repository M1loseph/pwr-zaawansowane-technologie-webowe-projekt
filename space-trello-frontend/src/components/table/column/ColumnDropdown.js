import React from "react";
import onClickOutside from "react-onclickoutside";

function ColumnDropdown({ children, show, setShow }) {
  ColumnDropdown.handleClickOutside = () => setShow(false);
  return (
    <div
      className="trello-column-options-dropdown "
      style={{ display: show ? "block" : "none" }}
    >
      {children}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => ColumnDropdown.handleClickOutside,
};

export default onClickOutside(ColumnDropdown, clickOutsideConfig);
