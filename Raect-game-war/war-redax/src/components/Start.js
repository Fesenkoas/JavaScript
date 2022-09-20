import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../redux/reducer/userReducer";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleClick =() =>{
    dispatch(changeName(name))
    navigate('/game');
  }

  return (
    <div>
      <h1>Ready For War</h1>
      <input
        onChange={(e) => setName(e.target.value.trim().toUpperCase())}
        value={name}
        type="text"
        placeholder="Enter your name"
      />
      <button
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  );
};

export default Start;
