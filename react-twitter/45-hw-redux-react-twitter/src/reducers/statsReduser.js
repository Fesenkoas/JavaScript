import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followers: 0,
  following: 0,
};

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    changeStats(stats, action) {
      switch (action.payload) {
        case "followers":
          stats.followers ++;
          break;
        case "followersMin":
          stats.followers = stats.followers -1 < 0 ? 0 : stats.followers -1;
          break;
        case "following":
          stats.following++;
          break;
        case "followingMin":
          stats.following = stats.following-1 < 0 ? 0 : stats.following-1;
          break;
        default:
          return stats;
      }
    },
  },
});

export const { changeStats } = statsSlice.actions;
export const statsReducer = statsSlice.reducer;
