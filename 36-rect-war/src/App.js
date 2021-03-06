import "./App.css";
import React from "react";
import Game from "./Component/Game";
import Result from "./Component/Result";
import Start from "./Component/Start";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
      current: "Start",
      cardCPU: [null],
      cardUser: [null],
      count: 0,
      countCPU: 0,
      countUser: 0,
    };
  }
  huWin = (count) => {
    
    if (this.state.cardCPU[count] > this.state.cardUser[count]) {
      this.state.countCPU ++;
    } 
    if (this.state.cardCPU[count] < this.state.cardUser[count]) {
      this.state.countUser ++;
    }
  };
  emptyCount = (zero) => {
    this.setState({ count: zero });
    this.setState({ countCPU: zero });
    this.setState({ countUser: zero });
    const arrCards = [...this.state.cardCPU,...this.state.cardUser];
    this.sortCards(arrCards);
  };
  getCount = (count) => {
    this.setState({ count });
  };
  getInput = (text) => {
    this.setState({ text });
  };
  changePage = (current) => {
    this.setState({ current });
  };
sortCards =(arrCards)=>{
  for (let i = arrCards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrCards[i], arrCards[j]] = [arrCards[j], arrCards[i]];
  }

  this.setState({cardCPU:arrCards.slice(0,26)});
  this.setState({cardUser:arrCards.slice(26,52)});
}
  componentDidMount() {
    const arrCards = [];

      for (let i = 0; i < 4; i++) {
        for (let y = 2; y <= 14; y++) {
          arrCards.push(y);
        }
      }
    this.sortCards(arrCards);
  
    }

  render() {
    switch (this.state.current) {
      case "Game":
        return (
          <Game
            length={this.state.cardUser.length}
            huWin={this.huWin}
            getCount={this.getCount}
            changePage={this.changePage}
            text={this.state.text}
            cpu={this.state.cardCPU}
            user={this.state.cardUser}
            count={this.state.count}
          />
        );
      case "Result":
        return (
          <Result
            emptyCount={this.emptyCount}
            changePage={this.changePage}
            countCPU={this.state.countCPU}
            countUser={this.state.countUser}
          />
        );
      default:
        return <Start changePage={this.changePage} getInput={this.getInput} />;
    }
  }
}

export default App;


      // spade
      // clubs
      // diamond
      // heart