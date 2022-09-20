
const Start = ({getInput,changePage}) => {
    let name = '';
   const handleClick = () => {
        getInput(name);
        changePage("Game")
      };
    
    const  handleChangeName = (e) => {
        name = e.target.value;
      };
      
    return (
        <div>
          <h1>Ready For War</h1>
  
          <input
            onChange={handleChangeName}
            type="text"
            placeholder="Enter your name"
          />
  
          <button onClick={handleClick}>Start</button>
        </div>
      );
}

export default Start
