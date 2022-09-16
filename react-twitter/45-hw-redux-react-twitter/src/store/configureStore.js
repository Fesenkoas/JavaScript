import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../reducers/userReducer";
import { statsReducer } from "../reducers/statsReduser";

export const store = configureStore({
  reducer: {
    stats: statsReducer,
    user: usersReducer,
  },
});
