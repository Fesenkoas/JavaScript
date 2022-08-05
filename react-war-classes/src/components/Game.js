import React, { useEffect, useState } from 'react'
import { creatDeck, result } from '../utils/contants'

const Game = ({changePage, getScore, nickName}) => {
  
  const [compCard, setCompCard] = useState('Computer card');
  const [playerCard,setPlayerCard] = useState('Player card');
  const [compWin, setCompWin] = useState(0);
  const [playerWin, setPlayerWin] = useState(0);
  const [compDeck,setCompDeck] = useState([]);
  const [playerDeck,setPlayerDeck] = useState([]);

  const handleClickNext = () => {
    if (playerDeck.length) {
      const comp = compDeck.pop();
      const player = playerDeck.pop();
      if (comp.rank > player.rank) {
        setCompWin(compWin+1);
      }
      if (comp.rank < player.rank) {
        setPlayerWin(playerWin+1);
      }
        setCompCard(`${comp.rank} ${comp.suit}`);
        setPlayerCard(`${player.rank} ${player.suit}`);
    } else {
      changePage(result);
      getScore([compWin, playerWin]);
    }

  }

 const compDidMount = () => {
    const deck = creatDeck();
    deck.sort(() => Math.random() - 0.5);
    setCompDeck(deck.slice(0, deck.length / 2));
    setPlayerDeck(deck.slice(deck.length / 2, deck.length));
    //handleClickNext();
    
  }
useEffect(() => {compDidMount();},[]);
 
    return (
      <div>
        <h2>Computer ({compWin})</h2>
        <p>{compCard}</p>
        <p>{playerCard}</p>
        <h2>{nickName} ({playerWin})</h2>
        <button onClick={handleClickNext}>Next</button>
      </div>
    )
  

}

export default Game