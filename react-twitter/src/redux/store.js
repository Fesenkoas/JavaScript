import {legacy_createStore as createStore} from '@reduxjs/toolkit'
import { userReducer } from './userReducer';


export const store = createStore(userReducer)