// const [page, setPage] = useState(start);
//   const [name, setName] = useState("You");
//   const [score, setScore] = useState([0, 0]);
//   const [res, setRes] = useState();

//   const changeName = (name) => {
//     if (name) {
//       setName(name);
//     }
//   };

//   const changeScore = (score) => {
//     if (score[0] > score[1]) {
//       setScore((prevScore) => [prevScore[0] + 1, prevScore[1]]);
//       setRes("Lose");
//     }
//     if (score[0] < score[1]) {
//       setScore((prevScore) => [prevScore[0], prevScore[1] + 1]);
//       setRes("Win");
//     }
//     if (score[0] === score[1]) {
//       setRes("Draw");
//     }
//   };





//   const [cardCPU, setCardCPU] = useState(null);
//   const [cardUser, setCardUser] = useState(null);
//   const [count, setCount] = useState(0);
//   const [countCPU, setCountCPU] = useState(0);
//   const [countUser, setCountUser] = useState(0);

//   const huWin = (count) => {
//     if (cardCPU[count] > cardUser[count]) {
//       setCountCPU(countCPU + 1);
//     }
//     if (cardCPU[count] < cardUser[count]) {
//       setCountUser(countUser + 1);
//     }
//   };
//   const emptyCount = () => {
//     setCount(0);
//     setCountCPU(0);
//     setCountUser(0);
//     const arrCards = [...cardCPU, ...cardUser];
//     sortCards(arrCards);
//   };

//   const sortCards = (arrCards) => {
//     for (let i = arrCards.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [arrCards[i], arrCards[j]] = [arrCards[j], arrCards[i]];
//     }

//     setCardCPU(arrCards.slice(0, 26));
//     setCardUser(arrCards.slice(26, 52));
//   };
//   const componentDidMount = () => {
//     const arrCards = [];

//     for (let i = 0; i < 4; i++) {
//       for (let y = 2; y <= 14; y++) {
//         arrCards.push(y);
//       }
//     }
//     sortCards(arrCards);
//   };
//   useEffect(() => {
//     componentDidMount();
//   }, []);


// const Game = () => {
  
//     const [compCard, setCompCard] = useState('Computer card');
//     const [playerCard, setPlayerCard] = useState('Player card');
  
//     const compDeck = useRef([]);
//     const playerDeck = useRef([]);
//     const compWin = useRef(0);
//     const playerWin = useRef(0);
  
//     const handleClickNext = () => {
//       if (playerDeck.current.length) {
//         const comp = compDeck.current.pop();
//         const player = playerDeck.current.pop();
//         if (comp.rank > player.rank) {
//           compWin.current++;
//         }
//         if (comp.rank < player.rank) {
//           playerWin.current++;
//         }
//         setCompCard(`${comp.rank}, ${comp.suit}`)
//         setPlayerCard(`${player.rank}, ${player.suit}`);
//       } else {
//         getScore([compWin.current, playerWin.current]);
//       }
  
//     }
  
//     useEffect(() => {
//       console.log('Game did mount');
//       const deck = creatDeck();
//       deck.sort(() => Math.random() - 0.5);
//       compDeck.current = deck.slice(0, deck.length / 2);
//       playerDeck.current = deck.slice(deck.length / 2, deck.length);
//       handleClickNext();
//       return () => {
//         console.log('Game will unmount');
//       }
//     }, []);
  
//     return (
//       <div>
//         <h2>Computer ({compWin.current})</h2>
//         <p>{compCard}</p>
//         <p>{playerCard}</p>
//         <h2>{nickName} ({playerWin.current})</h2>
//         <button onClick={handleClickNext}>Next</button>
//       </div>
//     )
//   }