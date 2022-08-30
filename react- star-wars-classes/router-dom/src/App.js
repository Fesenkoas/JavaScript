import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { defaultHero} from './utils/constants';
import { StarWarsContext } from './utils/context';

const App = props => {
  const [hero, setHero] = useState(defaultHero);

  return (
    <div className="container-fluid">
      <Header hero={hero} />
      <StarWarsContext.Provider value={{ hero, changeHero: setHero }}>
      <Main hero={hero}/>
      </StarWarsContext.Provider>
      <Footer />
    </div>
  );


}

export default App;
