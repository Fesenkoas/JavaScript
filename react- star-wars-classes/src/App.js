import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Footer from './components/Footer';
import Main from "./components/Main";
import { navItems } from "./utils/constants";
import { StarWarsContext } from "./util/context";

const App = () => {

  const [current, setCurrent] = useState(navItems[0]);
  const [zoom, setZoom] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handelClick = (photo) => {
    if (zoom) {
      setPhoto(null );
      setZoom(false);
    } else {
      setPhoto( photo );
      setZoom(true);
    }
  };

  return (
    <div className="container-fluid">
      <StarWarsContext.Provider value={{ setCurrent, handelClick, photo }}>
        <Header />
        <Main current={current} />
      </StarWarsContext.Provider>
    </div>
  );
};

export default App;
