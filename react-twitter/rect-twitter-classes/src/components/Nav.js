import React from 'react'
import { changeName } from '../redux/action';
import Avatar from './Avatar'
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <div className='nav' 
    onContextMenu={(e) => {
      e.preventDefault();
      const newName = prompt("Enter new Name");
      dispatch(changeName(newName));
    }}
    >
        <Avatar size='small'/>
    </div>
  )
}

export default Nav