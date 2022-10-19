import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userReducer, { changeAvatar, changeName } from "../reducers/userReducer";
import { RootState } from "../store/configureStore";

interface Props {
  size?: "small";
}

const Avatar = ({ size }: Props) => {
  const user = useSelector<RootState, ReturnType<typeof userReducer>>(state => state.user);
  const dispatch = useDispatch();

  return (
    <img
      onClick={() => {
        const url = prompt("Enter new avatar url");
        dispatch(changeAvatar(url));
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        const name = prompt("Enter new name");
        dispatch(changeName(name));
      }}
      className={`user-avatar ${size}`}
      src={user.avatar}
      alt={user.name}
    />
  );
};

export default Avatar;
