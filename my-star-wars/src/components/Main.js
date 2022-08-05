import React from "react";
import { navItems } from "../utils/constants"
import AboutContainer from "./About/AboutContainer";
import StarWars from "./StarWars/StarWars";
import Home from './Home'
import ContactContainer from "./Contact/ContactContainer";

const Main = ({current}) => {
  

    switch (current) {
      case navItems[1]:
        return <AboutContainer />;
      case navItems[2]:
        return <StarWars/>;
      case navItems[3]:
        return <ContactContainer />;
        default: return <Home/>
    }

}

export default Main;
