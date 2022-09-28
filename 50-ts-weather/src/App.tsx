import React from 'react';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import Weather from './components/Weather';

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
              <Info />
            </div>
            <div className="col-sm-7 form">
              <Form />
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
