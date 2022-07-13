import React from 'react'
import DreamTeam from './DreamTeam';
import FarGalaxy from './FarGalaxy';
import Hero from './Hero';

const Main = () => {
    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    )
}

export default Main