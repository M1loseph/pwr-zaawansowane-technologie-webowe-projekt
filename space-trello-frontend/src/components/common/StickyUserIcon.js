import React from "react";
import UserIcon from "./UserIcon";

const StickyUserIcon = ({ user, left, right, top, bottom, width, height }) => {
  return (
    <div
      style={{
        position: "fixed",
        left,
        right,
        top,
        bottom,
      }}
    >
      <UserIcon width={width} height={height} user={user} />
    </div>
  );
};

export default StickyUserIcon;
