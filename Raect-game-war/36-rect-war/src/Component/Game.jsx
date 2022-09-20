import style from "./Game.module.css";

const Game = ({huWin,getCount,length,changePage,text,cpu,user,count,}) => {
  
  const handleClick = () => {
    if (count < length - 1) {
      count++;
      huWin(count);
      getCount(count);
      changePage("Game");
    } else {

      changePage("Result");
    }
  };

  return (
    <>
      Computer
      <div>
        <div className={style.cards}>
          <p>{cpu[count]}</p>
        </div>
        <div className={style.cards}>
          <p>{user[count]}</p>
        </div>
      </div>
      <div>
        <button onClick={handleClick}>Next</button>
        {count}
      </div>
      {text}
    </>
  );
};
export default Game;
