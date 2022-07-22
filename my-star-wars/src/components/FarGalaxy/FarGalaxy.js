import React from 'react'
import s from '../../css_module/ferGalaxy.module.css'

const FarGalaxy = ({openingCrawl}) => {
    return (
        <p className={s.farGalaxy}>{openingCrawl}</p>
    )
}

export default FarGalaxy