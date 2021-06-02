import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/userSlice";
import { toAvatarSrc } from "../../utils/imageUtils";

const UserIcon = ({ width, height }) => {
  const { avatar, name, color } = useSelector((state) => getUser(state));

  const styles = {
    borderColor: color,
    width: width,
    height: height,
  };

  return (
    <div className={"rounded-circle mx-2 trello-user-icon"} style={styles}>
      <img
        src={toAvatarSrc(avatar)}
        alt={name}
        className={"img-fluid rounded-circle"}
      ></img>
    </div>
  );
};

export default UserIcon;
