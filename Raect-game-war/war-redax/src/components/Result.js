import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getResult, resetResultat } from "../redux/reducer/resultReducer";

const Result = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);
  const { cardUser, cardCPU } = useSelector((state) => state.game);
  const { compWin, playerWin, result } = useSelector((state) => state.result);

  useEffect(() => {
    dispatch(resetResultat());
    dispatch(getResult({ cardUser, cardCPU, name }));
  }, []);
  
  return (
    <div>
      <h2>{result}</h2>
      <h3>
        {compWin}-{playerWin}
      </h3>
      <button
        onClick={() => {
          navigate(`/game`);
        }}
      >
        Again ?
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Result;
