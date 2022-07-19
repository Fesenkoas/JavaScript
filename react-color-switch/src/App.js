import "./App.css";
import Content from "./components/Content";
import React from "react";

const color = ["red", "green", "blue", "yellow"];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      largeColor:''
    };
  }

  changeColor = color => this.setState({largeColor:color});

  render() {
    if (this.state.largeColor) {
      return (
        <div className="wrapper large">
          <Content color={this.state.largeColor} changeColor={this.changeColor} size="large" />
        </div>
      );
    } 
    else {
      return (
        <div className="wrapper large">
          {color.map((c) => (<Content key={c} changeColor={this.changeColor} color={c} size="small"/>))}
        </div>
      );
    }
  }
}

export default App;
