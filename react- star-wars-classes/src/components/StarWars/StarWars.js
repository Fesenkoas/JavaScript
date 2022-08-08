import React from 'react'
import { starWars } from '../../utils/constants'
import s from '../../css_module/ferGalaxy.module.css'

const StarWars = () => {
  return (
    <div>
      <p className={s.farGalaxy}>{starWars}</p>
    </div>
  )
}

export default StarWars
