import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { unitCards } from "./../redux/action/unitCard";
import { game, reset } from "../redux/reducer/gameReducer";

const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);
  const { compCard, playerCard, bool } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(unitCards());
    dispatch(reset());
    dispatch(game(0));
  }, []);

  return (
    <div>
      <h2>Computer</h2>
      <p>{compCard}</p>
      <p>{playerCard}</p>
      <h2>{name}</h2>
      <button
        onClick={() => {
          bool ? dispatch(game(1)) : navigate(`/result`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Game;
