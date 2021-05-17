import React from "react";

const DEF_SIZE = 35;

const UserIconSmall = ({ user, width, height }) => {
  const { src, name, color } = user;
  const styles = {
    borderColor: color,
    width: width ?? DEF_SIZE,
    height: height ?? DEF_SIZE,
  };

  return (
    <div className={"rounded-circle mx-2 user-icon-small"} style={styles}>
      <img src={src} alt={name} className={"img-fluid rounded-circle"}></img>
    </div>
  );
};

export default UserIconSmall;
