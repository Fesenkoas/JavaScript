import { LEFT_BTN_FOLLOWERS, RIGHT_BTN_FOLLOWING, CHENGE_AVATAR, CHENGE_NAME, RIGHT_BTN_FOLLOWERS, LEFT_BTN_FOLLOWING } from './types';

export function leftBtnFollowers(){
    return {
        type: LEFT_BTN_FOLLOWERS
    }
} 
export function rightBtnFollowers(){
    return {
        type: RIGHT_BTN_FOLLOWERS
    }
} 

export function rightBtnFollowing(){
    return {
        type: RIGHT_BTN_FOLLOWING
    }
} 

export function leftBtnFollowing(){
    return {
        type: LEFT_BTN_FOLLOWING
    }
} 

export function changeAvatar(avatar){
    return {
        type: CHENGE_AVATAR,
        avatar
    }
} 

export function changeName(name){
    return {
        type: CHENGE_NAME,
        name
    }
} 