import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
  name: "Monster",
};

export const usersSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
  changeAvatar(user, action){
    user.avatar = action.payload || user.avatar;
  },
  changeName(user, action){
    user.name = action.payload || user.name;
  }
}
});

export const {changeAvatar, changeName } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;