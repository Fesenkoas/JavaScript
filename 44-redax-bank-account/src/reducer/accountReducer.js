import { DEPOSIT, WITHDRAW } from './../action/moneyActions';



export const accontReducer = (state, action)=> {
    switch(action.type){
case DEPOSIT:
    return{...state, balance:state.balance+ action.payload};
    case WITHDRAW:
        const res = state.balance -action.payload
    return{...state, balance:res<0 ? state.balance:res};
    default: return state;
    }
}