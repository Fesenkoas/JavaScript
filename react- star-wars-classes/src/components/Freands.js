import React from 'react'
import s from '../css_module/borderRound.module.css'

const Friends = ({photo, number,change,bool}) => {
  
    let friendStyle = 'col-4 p-1 ';
    if(number === 7){
        friendStyle += s.bottomLeft;
    }
    if(number === 9){
        friendStyle += s.bottomRight;
    }
    if(bool)  friendStyle = s.zoom;
  return (
    <img onClick={() => change(photo)} className={friendStyle} src={photo} alt="friend" />
  )
}

export default Friends
