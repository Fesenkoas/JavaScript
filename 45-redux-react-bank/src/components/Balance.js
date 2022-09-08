import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.balance);
 
  return (
    <div className="text-center text-uppercase">
      <h1 >Bank</h1>
      <h3 >Balance = {balance}</h3>
    </div>
  );
};

export default Balance;
