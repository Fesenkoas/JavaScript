import React from 'react'
import style from '../css_modules/borderRound.module.css';

const Friend = ({ photo, number, handelClick}) => {
    let friendStyle = 'col-4 p-1 ';

    if (number === 7) {
        friendStyle += style.bottomLeft;
    }
    if (number === 9) {
        friendStyle += style.bottomRight;
    }
    return (
        <img onClick={() =>{ handelClick(photo, number)}} className={friendStyle}  src={photo} alt="friend" />
    )
}

export default Friend