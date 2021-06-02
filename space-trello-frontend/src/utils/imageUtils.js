const folder = "/upload-images/";

export const toBackgroundSrc = (bg) => {
  return `${folder}/boards/${bg}`;
};

export const toAvatarSrc = (avatar) => {
  return `${folder}/users/${avatar}`;
};
