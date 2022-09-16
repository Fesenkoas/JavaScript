
import { CHENGE_AVATAR, CHENGE_NAME } from './types';

const intialState = {
    avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
    name: 'Monster'
}
export const avatarReducer = (state = intialState, action) => {
    console.log(action);
    switch(action.type){
        case CHENGE_AVATAR:
            console.log({...state, followers: state.followers + 1});
            return{
                ...state, followers: state.followers + 1
            }
            case CHENGE_NAME:
                return{
                    ...state, following: state.following + 1
                }
            default:
                return state;
    }
};
