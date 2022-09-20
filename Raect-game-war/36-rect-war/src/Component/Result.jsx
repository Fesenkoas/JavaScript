import './Result.module.css'
const  Result = ({emptyCount,changePage,countCPU, countUser}) => {

    const handleClick = () => {
        emptyCount();
        changePage('Game');
    }
    
    return (
      <div>
        <h1>LOSE/WIN</h1>
        <h2>{countCPU}-{countUser}</h2>
        <div>
            <button onClick={ handleClick}>Again?</button>
        </div>
      </div>
    )
}
export default Result;