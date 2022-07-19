import React from 'react'

const Content = ({color, size, changeColor}) => {
    const handleClick =() =>{
        if(size==='large')changeColor('');
        else changeColor(color); 
    }
  return (
    <div>
      <div onClick ={handleClick} className={` ${color} ${size}`}></div>
    </div>
  )
}

export default Content
