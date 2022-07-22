import React from 'react'
import DreamTeam from './DreamTeam';
import FarGalaxyContainer from './FarGalaxy/FarGalaxyContainer';
import Hero from './Hero';

const Home = ({cPhoto, change}) => {
  return (
    <main className="clearfix">
            <Hero />
            <DreamTeam cPhoto={cPhoto} change={change}/>
            <FarGalaxyContainer />
        </main>
  )
}

export default Home
