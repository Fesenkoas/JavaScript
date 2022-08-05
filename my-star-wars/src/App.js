import React from "react";
import "./App.css";
import Header from "./components/Header";
// import Footer from './components/Footer';
import Main from "./components/Main";
import { navItems } from "./utils/constants";
import { StarWarsContext } from "./util/context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: navItems[0],
      zoom: false,
      photo: null,
    };
  }
  changePage = (current) => {
    this.setState({ current });
  };
  handelClick = (photo) => {
    if (this.state.zoom) this.setState({ photo: null, zoom: false });
    else this.setState({ photo, zoom: true });
  };

  changeZoom = (zoom) => {
    this.setState(!zoom);
  };
  render() {
    return (
      <div className="container-fluid">
        <StarWarsContext.Provider
          value={{
            changePage: this.changePage,
            handelClick: this.handelClick,
            photo: this.state.photo,
          }}
        >
          <Header />
          <Main current={this.state.current} />
        </StarWarsContext.Provider>
      </div>
    );
  }
}

export default App;
