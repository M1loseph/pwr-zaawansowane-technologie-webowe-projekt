import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryAPI } from "../../../../../redux/api";
import { READY } from "../../../../../redux/APIStates";

const Category = ({ categoryId }) => {
  const dispatch = useDispatch();
  const category = useSelector((s) =>
    s.categories.categories.find((c) => c.id === categoryId)
  );
  useEffect(() => {
    if (!category) {
      dispatch(fetchCategoryAPI(categoryId));
    }
  }, [dispatch]);

  if (category?.status === READY) {
    const { color, title } = category.entity;
    return (
      <div
        style={{ backgroundColor: color }}
        className="trello-category mr-2 rounded-pill"
      >
        {title}
      </div>
    );
  } else {
    return null;
  }
};

export default Category;
