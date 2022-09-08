import React from "react";

import { useSelector } from 'react-redux';
import { changeAvatar } from './../redux/action';
import { useDispatch } from 'react-redux';

const Avatar = ({ size }) => {
  const dispatch = useDispatch();
  const avatar = useSelector(state => state.avatar)
  const name = useSelector(state => state.name)
  
  return (
    <img
      className={`user-avatar ${size ?? ""}`}
      src={avatar}
      alt={name}
      onClick={() => {
        const url = prompt("Enter new avatar url");
        dispatch(changeAvatar(url));
      }}
    />
  );
};

export default Avatar;
