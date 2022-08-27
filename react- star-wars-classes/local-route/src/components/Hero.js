import React, { useContext } from 'react';
import { characters } from '../utils/constants';
import { StarWarsContext } from './../utils/context';

const Hero = () => {
    const {hero} = useContext(StarWarsContext)
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={characters[hero].img} alt={characters[hero].img} />
        </section>
    )
}

export default Hero