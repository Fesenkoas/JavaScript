
import style from './Game.module.css'

const Game = ({huWin,getCount ,length, changePage, text,cpu, user, count}) => {

    const handleClick = () => {
        if(count<length-1){
            count++;
            getCount(count);
            changePage("Game");

        } else {
            huWin();
            changePage("Result")
        
        }
      };
    
    return (
      <>
        Computer
        <div>
            <div className={style.cards}>
                <p>{cpu[count]} {count}</p>
            </div>
            <div className={style.cards}>
                <p>{user[count]}</p>
            </div>
        </div>
        <div>
            <button onClick={handleClick}>Next</button>
        </div>
      {text}
      </>
    )
  }
export default Game;