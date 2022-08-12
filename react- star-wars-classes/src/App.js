import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useState } from 'react';
import { navItems } from './utils/constants';

const App = props => {
  const [currentPage, setCurrentPage] = useState(navItems[0]);

  return (
    <div className="container-fluid">
      <Header changePage={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );


}

export default App;
