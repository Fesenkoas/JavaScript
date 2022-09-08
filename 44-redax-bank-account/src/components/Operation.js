import React, { useState } from "react";
import { withdraw } from "../action/moneyActions";
import { store } from './../store/confStore';
import { deposit } from './../action/moneyActions';

const Operation = () => {
  const [sum, setSum] = useState(1);

  return (
    <div>
      <button onClick={()=> store.dispatch(withdraw(sum))}>Withdraw</button>
      <input
        onChange={(e) => setSum(+e.target.value)}
        type="number"
        value={sum}
      />
      <button onClick={()=> store.dispatch(deposit(sum))}>Deposi</button>
    </div>
  );
};

export default Operation;
