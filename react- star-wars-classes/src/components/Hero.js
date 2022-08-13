import React, { useContext } from 'react'

import { StarWarsContext } from './../utils/context';

const Hero = () => {
    const {mainImage} = useContext(StarWarsContext)
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={mainImage} alt="Luke Skywalker" />
        </section>
    )
}

export default Hero