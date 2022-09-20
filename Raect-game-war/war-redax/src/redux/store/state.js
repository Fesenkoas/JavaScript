import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../reducer/gameReducer';
import resultReducer from '../reducer/resultReducer';
import userReducer from '../reducer/userReducer';
import { loggerEnhancer } from './../middleWare/thunkEnhancer';


export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    result: resultReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer)
});
