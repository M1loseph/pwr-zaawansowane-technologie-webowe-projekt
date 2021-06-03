import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAPI } from "../../redux/api";
import { READY } from "../../redux/APIStates";
import { toAvatarSrc } from "../../utils/imageUtils";

const UserIcon = ({ width, height, userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.find((u) => u.id === userId));

  if (!user) {
    dispatch(fetchUserAPI(userId));
  }

  const styles = {
    width: width,
    height: height,
  };

  if (user && user.status === READY) {
    const { avatar, color } = user.entity;
    styles.borderColor = color;
    return (
      <div className={"rounded-circle mx-2 trello-user-icon"} style={styles}>
        <img
          src={toAvatarSrc(avatar)}
          alt={"avatar"}
          className={"img-fluid rounded-circle"}
        ></img>
      </div>
    );
  } else {
    return (
      <div
        className={"rounded-circle mx-2 trello-user-icon"}
        style={styles}
      ></div>
    );
  }
};

export default UserIcon;
