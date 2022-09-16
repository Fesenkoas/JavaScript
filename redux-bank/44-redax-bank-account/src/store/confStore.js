import { createStore } from '../redux/createStore';
import { accontReducer } from './../reducer/accountReducer';

const intialState = {

    balance: 0,
  };
export const store = createStore(accontReducer, intialState)

