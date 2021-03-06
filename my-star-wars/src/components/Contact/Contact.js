import React from 'react'
import s from '../../css_module/Contact.module.css'


const Contact = ({planets}) => {
  return (
    <div className={s.container}>
<div>
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
    <div>
    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
    <div className={s.select}>
    <label htmlFor='country'>Country</label>
    <select id="country" name="country">
      {planets.map((item, key) => (
        <option key={key} value={key}>{item.name}</option>
      ))}
    </select>
    </div>
    <div className={s.textarea}>
    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:200}}></textarea>
    </div>
    <div>
    <input type="submit" value="Submit"/>
    </div>
</div>
  )
}

export default Contact
