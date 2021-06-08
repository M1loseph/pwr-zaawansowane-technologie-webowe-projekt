import React from "react";
import { useSelector } from "react-redux";
import { toBackgroundSrc } from "../../utils/imageUtils";

const TableBackground = ({ children, tableId }) => {
  const table = useSelector((s) =>
    s.tables.tables.find((t) => t.id === tableId)
  );
  const bgImage = table?.entity?.img;
  return (
    <div
      style={{
        backgroundImage: bgImage ? `url(${toBackgroundSrc(bgImage)})` : null,
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
