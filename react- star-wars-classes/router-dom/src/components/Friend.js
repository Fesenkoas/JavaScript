import React from 'react'
import style from '../css_modules/borderRound.module.css';
import { characters } from '../utils/constants';
import { NavLink, useNavigate} from 'react-router-dom';

const Friend = ({ friend, number }) => {
    const navigate = useNavigate();
    let friendStyle = 'col-4 p-1 ';

    if (number === 7) {
        friendStyle += style.bottomLeft;
    }
    if (number === 9) {
        friendStyle += style.bottomRight;
    }
    return (
      <>
       {/* <NavLink className={friendStyle} to={`/home/${friend}`} replace ><img className='w-100' src={characters[friend].img} alt={characters[friend].name} /></NavLink> */}
       <img className={friendStyle} onClick={()=>navigate(`/home/${friend}`)} src={characters[friend].img} alt={characters[friend].name} />
   </>
       )
}

export default Friend