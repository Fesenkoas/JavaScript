import React, { useContext } from "react";
import { TwitterContext } from "../utils/context";

const Avatar = ({ size }) => {
  const { user, changeAvatar } = useContext(TwitterContext);
  return (
    <img
      className={`user-avatar ${size ?? ""}`}
      src={user.avatar}
      alt={user.name}
      onClick={() => {
        const url = prompt("Enter new avatar url");
        changeAvatar(url);
      }}
    />
  );
};

export default Avatar;
