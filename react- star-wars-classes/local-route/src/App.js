import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React, { useEffect, useState } from "react";
import { defaultHero, navItems, friends } from "./utils/constants";
import { StarWarsContext } from "./utils/context";

const App = (props) => {
  const getItemByRoute = () => {
    const route = window.location.hash.substring(2);
    const RoutSplit = route.split("/")[1];
    const page = navItems.find((item) => item.route === route.split("/")[0]);
    return { page, RoutSplit };
  };

  const [hero, setHero] = useState(defaultHero);
  const [currentPage, setCurrentPage] = useState(getItemByRoute().page);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setCurrentPage(getItemByRoute().page);
      if (getItemByRoute().RoutSplit) {
        setHero(
          friends.find((item) => item === getItemByRoute().RoutSplit) ??
            defaultHero
        );
      }
    });
  }, []);

  useEffect(() => {
    //здесь можно любое условие уже сделать, что бы играться с адресной строкой
    if(currentPage.route === 'about_me' || currentPage.route === 'home')window.location.hash = `#/${currentPage.route}/${hero}`;
    else window.location.hash = `#/${getItemByRoute().page.route}`;
  }, [hero, currentPage]);

  return (
    <div className="container-fluid">
      <Header hero={hero} />
      <StarWarsContext.Provider value={{ hero, changeHero: setHero }}>
        <Main currentPage={currentPage} />
      </StarWarsContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
