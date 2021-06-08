import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryAPI } from "../../../../../redux/api";

const CategoryMinimal = ({ categoryId }) => {
  const dispatch = useDispatch();
  const category = useSelector((s) =>
    s.categories.categories.find((c) => c.id === categoryId)
  );

  if (!category) {
    dispatch(fetchCategoryAPI(categoryId));
  }

  return (
    <div
      className="rounded-pill category-minimal m-1"
      style={{ backgroundColor: category?.entity?.color }}
    ></div>
  );
};

export default CategoryMinimal;
