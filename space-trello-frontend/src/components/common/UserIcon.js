import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAPI } from "../../redux/api";
import { toAvatarSrc } from "../../utils/imageUtils";

const UserIcon = ({ width, height, userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.users.users.find((u) => u.id === userId)
  );

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserAPI(userId));
    }
  }, []);

  const styles = {
    width: width ?? 40,
    height: height ?? 40,
  };

  return (
    <div
      style={{
        minWidth: styles.width,
        minHeight: styles.height,
        color: user?.entity?.preferredColor,
      }}
      className={"rounded-circle mx-2 trello-user-icon"}
    >
      <img
        src={user?.entity?.avatar ? toAvatarSrc(user.entity.avatar) : null}
        alt={"avatar"}
        style={{
          objectFit: "cover",
          ...styles,
        }}
        className={"rounded-circle"}
      />
    </div>
  );
};

export default UserIcon;
