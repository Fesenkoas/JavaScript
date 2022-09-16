import React, { useEffect, useRef, useState } from 'react'
import { creatDeck, result } from '../utils/contants'

const Game = ({changePage, getScore, nickName}) => {
  
  const [compCard, setCompCard] = useState('Computer card');
  const [playerCard,setPlayerCard] = useState('Player card');
  // const [compWin, setCompWin] = useState(0);
  // const [playerWin, setPlayerWin] = useState(0);
  // const [compDeck,setCompDeck] = useState([]);
  // const [playerDeck,setPlayerDeck] = useState([]);
  const compWin = useRef(0);
  const playerWin = useRef(0);
  const compDeck= useRef([]);
  const playerDeck = useRef([]);

  const handleClickNext = () => {
    if (playerDeck.current.length) {
      const comp = compDeck.current.pop();
      const player = playerDeck.current.pop();
      if (comp.rank > player.rank) {
        compWin.current++;
      }
      if (comp.rank < player.rank) {
        playerWin.current++;
      }
        setCompCard(`${comp.rank} ${comp.suit}`);
        setPlayerCard(`${player.rank} ${player.suit}`);
    } else {
      changePage(result);
      getScore([compWin.current, playerWin.current]);
    }

  }

 const compDidMount = () => {
    const deck = creatDeck();
    deck.sort(() => Math.random() - 0.5);
    compDeck.current = deck.slice(0, deck.length / 2);
    playerDeck.current = deck.slice(deck.length / 2, deck.length);
    handleClickNext();
    
  }
useEffect(() => {compDidMount();},[]);
 
    return (
      <div>
        <h2>Computer ({compWin.current})</h2>
        <p>{compCard}</p>
        <p>{playerCard}</p>
        <h2>{nickName} ({playerWin.current})</h2>
        <button onClick={handleClickNext}>Next</button>
      </div>
    )
  

}

export default Game