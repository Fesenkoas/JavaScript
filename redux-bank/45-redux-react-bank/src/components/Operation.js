import React, { useState } from "react";
import { withdraw } from "../action/moneyActions";
import { deposit } from './../action/moneyActions';
import { useDispatch } from "react-redux";

const Operation = () => {
  const [sum, setSum] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
      <button className="btn btn-primary btn-lg" onClick={()=> dispatch(withdraw(sum))}>Withdraw</button>
      <input
      className="form-control-lg text-center"
        onChange={(e) => setSum(+e.target.value)}
        type="number"
        value={sum}
      />
      <button className="btn btn-primary btn-lg" onClick={()=> dispatch(deposit(sum))}>Deposi</button>
      </div>
    </div>
  );
};

export default Operation;
