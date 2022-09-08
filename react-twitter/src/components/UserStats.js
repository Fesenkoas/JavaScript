import React from "react";
import Avatar from "./Avatar";
import { useDispatch } from "react-redux";
import {
  changeName,
  leftBtnFollowers,
  leftBtnFollowing,
  rightBtnFollowers,
  rightBtnFollowing,
} from "./../redux/action";
import { useSelector } from "react-redux";

const UserStats = () => {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers);
  const following = useSelector((state) => state.following);
  const name = useSelector((state) => state.name);

  return (
    <div className="user-stats">
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          const newName = prompt("Enter new Name");
          dispatch(changeName(newName));
        }}
      >
        <Avatar />
        {name}
      </div>
      <div className="stats">
        <div
          onClick={() => dispatch(leftBtnFollowers())}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(rightBtnFollowers());
          }}
        >
          Followers: {followers}
        </div>
        <div
          onClick={() => dispatch(leftBtnFollowing())}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(rightBtnFollowing());
          }}
        >
          Following: {following}
        </div>
      </div>
    </div>
  );
};

export default UserStats;
