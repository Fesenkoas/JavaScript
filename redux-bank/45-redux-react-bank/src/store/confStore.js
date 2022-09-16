import {legacy_createStore} from '@reduxjs/toolkit'
import { accontReducer } from './../reducer/accountReducer';

const intialState = {

    balance: 0,
  };
export const store = legacy_createStore(accontReducer, intialState)

