import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useState } from 'react';
import { navItems, friends } from './utils/constants';
import { StarWarsContext } from './utils/context';
import main from './Images/main.jpg';

const App = () => {
  const [currentPage, setCurrentPage] = useState(navItems[0]);
  const [mainImage, setMainImage] = useState(main);
  const [photos, setPhotos] = useState([...friends]);

  const handelClick = (pfoto, index) => {
      
    const tmp = pfoto;
    const photosTmp = [...photos];
    photosTmp[index] = mainImage;
    setPhotos(photosTmp);
    setMainImage(tmp);
  }; 

  return (
    <div className="container-fluid">
      <StarWarsContext.Provider value={{ setCurrentPage, handelClick, mainImage, photos }}>
        <Header />
        <Main currentPage={currentPage} />
        <Footer/>
      </StarWarsContext.Provider>
    </div>
  );


}

export default App;
