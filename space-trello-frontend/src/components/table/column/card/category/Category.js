import React from "react";

const Category = ({ category }) => {
  const { color, title } = category;
  return (
    <div
      style={{ backgroundColor: color }}
      className="trello-category mr-2 rounded-pill"
    >
      {title}
    </div>
  );
};

export default Category;
