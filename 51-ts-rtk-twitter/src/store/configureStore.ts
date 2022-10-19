import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "../reducers/statsReducer";
import userReducer from "../reducers/userReducer";


export const initialState = {
    user: {
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
        name: 'Monster'
    },
    stats: {
        followers: 0,
        following: 0
    }
}

export const store = configureStore({
    reducer: {
        user: userReducer, 
        stats: statsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;