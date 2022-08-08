import React, { useContext } from "react";
import { TwitterContext } from "../utils/context";
import Avatar from "./Avatar";

const UserStats = () => {
  const { user, stats } = useContext(TwitterContext);
  return (
    <div className="user-stats">
      <div>
        <Avatar />
        {user.name}
      </div>
      <div className="stats">
        <div>Followers: {stats.followers}</div>
        <div>Following: {stats.following}</div>
      </div>
    </div>
  );
};

export default UserStats;
