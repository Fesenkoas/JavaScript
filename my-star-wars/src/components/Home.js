import React from 'react'
import DreamTeam from './DreamTeam';
import FarGalaxy from './FarGalaxy';
import Hero from './Hero';

const Home = ({cPhoto, change}) => {
  return (
    <main className="clearfix">
            <Hero />
            <DreamTeam cPhoto={cPhoto} change={change}/>
            <FarGalaxy />
        </main>
  )
}

export default Home
