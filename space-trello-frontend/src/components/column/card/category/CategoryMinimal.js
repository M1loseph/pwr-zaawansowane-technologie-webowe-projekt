import React from "react";

const CategoryMinimal = ({ category }) => {
  const { color } = category;
  return (
    <div
      className="rounded-pill category-minimal m-1"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default CategoryMinimal;
