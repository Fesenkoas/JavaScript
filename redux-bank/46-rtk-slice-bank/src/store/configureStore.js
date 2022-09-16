import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { accountReducer } from "../reducers/accountReducer";
import quoteReducer from "../reducers/quoteReducer";
import { loggerEnhancer } from './../miblleWare/thunkEnhancer';
import { logger } from './../miblleWare/loggerWare';

// state = {
//     account: {
//         balance: number
//     },
//     quote:{
//         text: string
//     }
// }

export const store = configureStore({
  reducer: {
    account: accountReducer,
    quote: quoteReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer, logger)
});
