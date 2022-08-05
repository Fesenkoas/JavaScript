import React from 'react'
import DreamTeam from './DreamTeam';
import FarGalaxyContainer from './FarGalaxy/FarGalaxyContainer';
import Hero from './Hero';

const Home = () => {
  return (
    <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxyContainer />
        </main>
  )
}

export default Home
