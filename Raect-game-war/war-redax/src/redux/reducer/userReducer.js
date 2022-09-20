import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"You"
  };

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        changeName(user, action){
            user.name = action.payload||user.name;
        }
    },
})

export const { changeName } = userSlice.actions;
export default userSlice.reducer;