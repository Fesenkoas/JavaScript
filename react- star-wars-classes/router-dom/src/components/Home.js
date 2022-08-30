import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { defaultHero, friends } from '../utils/constants'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import Hero from './Hero'
import { StarWarsContext } from './../utils/context';

const Home = () => {
    const {changeHero} = useContext(StarWarsContext)
    let { heroId } = useParams();
    
    if(!friends.includes(heroId)){
        heroId = defaultHero;
        
    }
    
    

    useEffect(() => {
        
        changeHero(heroId);
    }, [heroId, changeHero])

    return (
        <main className="clearfix">
            <Hero hero={heroId} />
            <DreamTeam hero={heroId} />
            <FarGalaxy />
        </main>
    )
}

export default Home