import {
  LEFT_BTN_FOLLOWERS,
  RIGHT_BTN_FOLLOWING,
  CHENGE_AVATAR,
  CHENGE_NAME,
  RIGHT_BTN_FOLLOWERS,
  LEFT_BTN_FOLLOWING,
} from "./types";

//url change avatar
//https://www.gravatar.com/avatar/0?d=robohash

const intialState = {
  following: 0,
  followers: 0,
  avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
  name: "Monster",
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case LEFT_BTN_FOLLOWERS:
      return {
        ...state,
        followers: state.followers + 1,
      };
    case RIGHT_BTN_FOLLOWERS:
      return {
        ...state,
        followers:
          state.followers - 1 < 0 ? state.followers : state.followers - 1,
      };
    case LEFT_BTN_FOLLOWING:
      return {
        ...state,
        following: state.following + 1,
      };

    case RIGHT_BTN_FOLLOWING:
      return {
        ...state,
        following:
          state.following - 1 < 0 ? state.following : state.following - 1,
      };
    case CHENGE_AVATAR:
      return {
        ...state,
        avatar: action.avatar ? action.avatar : state.avatar,
      };
    case CHENGE_NAME:
      return {
        ...state,
        name: action.name ? action.name : state.name,
      };
    default:
      return state;
  }
};
