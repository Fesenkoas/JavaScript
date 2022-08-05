import "./App.css";
import React, { useEffect, useState } from "react";
import Game from "./Component/Game";
import Result from "./Component/Result";
import Start from "./Component/Start";

const App = () => {
  
  const [current, setCurrent] = useState("Start");
  const [cardCPU, setCardCPU] = useState(null);
  const [cardUser, setCardUser] = useState(null);
  const [count, setCount] = useState(0);
  const [countCPU, setCountCPU] = useState(0);
  const [countUser, setCountUser] = useState(0);
  const [text, setText] = useState(0);

  const huWin = (count) => {
    if (cardCPU[count] > cardUser[count]) {
      setCountCPU(countCPU + 1);
    }
    if (cardCPU[count] < cardUser[count]) {
      setCountUser(countUser + 1);
    }
  };
  const emptyCount = () => {
    setCount(0);
    setCountCPU(0);
    setCountUser(0);
    const arrCards = [...cardCPU, ...cardUser];
    sortCards(arrCards);
  };

  const sortCards = (arrCards) => {
    for (let i = arrCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrCards[i], arrCards[j]] = [arrCards[j], arrCards[i]];
    }

    setCardCPU(arrCards.slice(0, 26));
    setCardUser(arrCards.slice(26, 52));
  };
  const componentDidMount = () => {
    const arrCards = [];

    for (let i = 0; i < 4; i++) {
      for (let y = 2; y <= 14; y++) {
        arrCards.push(y);
      }
    }
    sortCards(arrCards);
  };
  useEffect(() => {
    componentDidMount();
  }, []);

  switch (current) {
    case "Game":
      return (
        <Game
          length={cardUser.length}
          huWin={huWin}
          getCount={setCount}
          changePage={setCurrent}
          text={text}
          cpu={cardCPU}
          user={cardUser}
          count={count}
        />
      );
    case "Result":
      return (
        <Result
          emptyCount={emptyCount}
          changePage={setCurrent}
          countCPU={countCPU}
          countUser={countUser}
        />
      );
    default:
      return <Start changePage={setCurrent} getInput={setText} />;
  }
};

export default App;
