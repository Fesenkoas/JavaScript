import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const defaultUser = {
    avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
    name: 'Monster'
}

const userSlice = createSlice({
    name: 'user',
    initialState: defaultUser,
    reducers: {
        changeName(user, action: PayloadAction<string|null>) {
            user.name = action.payload || user.name
        },
        changeAvatar(user, action) {
            user.avatar = action.payload || user.avatar
        }
    }
})

export const {changeAvatar, changeName} = userSlice.actions;
export default userSlice.reducer;