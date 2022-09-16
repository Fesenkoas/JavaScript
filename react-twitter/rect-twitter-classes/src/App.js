import React, { useState } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Body from './components/Body';
import Nav from './components/Nav';

const App =() => {
  
    return (
      <div className='app'>
          <Nav> 
            <Avatar/>
          </Nav>
          <Body />
      </div>
    );

}

export default App;
