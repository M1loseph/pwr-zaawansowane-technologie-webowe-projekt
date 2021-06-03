import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAPI } from "../../redux/api";
import { READY } from "../../redux/APIStates";
import { toAvatarSrc } from "../../utils/imageUtils";

const UserIcon = ({ width, height, userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.users.find((u) => u.id === userId));

  if (!user) {
    dispatch(fetchUserAPI(userId));
  }

  const styles = {
    width: width,
    height: height,
  };

  return (
    <div
      style={{ minWidth: width, minHeight: height }}
      className={"rounded-circle mx-2 trello-user-icon"}
    >
      {(() => {
        if (user && user.status === READY) {
          const { avatar, color } = user.entity;
          styles.borderColor = color;
          return (
            <img
              src={toAvatarSrc(avatar)}
              alt={"avatar"}
              style={{ objectFit: "cover", ...styles }}
              className={"rounded-circle"}
            />
          );
        }
        return null;
      })()}
    </div>
  );
};

export default UserIcon;
