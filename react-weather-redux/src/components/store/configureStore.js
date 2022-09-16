import { configureStore} from "@reduxjs/toolkit";
import { loggerEnhancer } from '../miblleWare/thunkEnhancer';
import { logger } from '../miblleWare/loggerWare';
import weatherReducer from "../reducer/weatherReducer";

export const store = configureStore({
  reducer: {
  weather:weatherReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer, logger)
});
