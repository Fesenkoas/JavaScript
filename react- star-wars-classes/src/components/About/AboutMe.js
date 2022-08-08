import React from 'react'
import s from '../../css_module/AboutMe.module.css'

const AboutMe = ({User, imgUrl}) => {
  
  return (
    <div className={s.about}>
      <div className={s.padding}><img src ={imgUrl} alt='#'/></div>
      <div className={s.padding}>Birth Year: {User.birth_year}</div>
      <div className={s.padding}>Gender: {User.gender}</div>
      <div className={s.padding}>Skin Color: {User.skin_color}</div>
      <div className={s.padding}>Hair Color: {User.hair_color}</div>
      <div className={s.padding}>Height: {User.height}</div>
      <div className={s.padding}>Eye Color: {User.eye_color}</div>
      <div className={s.padding}>Mass: {User.mass}</div>
      
    </div>
  )
}

export default AboutMe
