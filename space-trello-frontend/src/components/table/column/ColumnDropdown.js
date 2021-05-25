import React, { useRef, useEffect } from "react";

const useClickOutside = (ref, show, setShow) => {
  useEffect(() => {
    if (show) {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setShow(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [ref, show]);
};

function ColumnDropdown({ children, show, setShow }) {
  const componentRef = useRef(null);
  useClickOutside(componentRef, show, setShow);
  return (
    <div
      ref={componentRef}
      className="trello-column-options-dropdown "
      style={{ display: show ? "block" : "none" }}
    >
      {children}
    </div>
  );
}

export default ColumnDropdown;
