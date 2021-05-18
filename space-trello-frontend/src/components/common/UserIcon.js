import React from "react";

const UserIcon = ({ user, width, height }) => {
  const { src, name, color } = user;
  const styles = {
    borderColor: color,
    width: width,
    height: height,
  };

  return (
    <div className={"rounded-circle mx-2 trello-user-icon"} style={styles}>
      <img src={src} alt={name} className={"img-fluid rounded-circle"}></img>
    </div>
  );
};

export default UserIcon;
