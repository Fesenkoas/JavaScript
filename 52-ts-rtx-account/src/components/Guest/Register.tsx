import React, { useState } from "react";

const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleClickRegister = () =>{

  }

  const handleClickClear = () =>{
    setLogin('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <div>
      <label>
        Login:
        <input
          type={"text"}
          onChange={(e) => setLogin(e.target.value.trim())}
          value={login}
        />
      </label>
      <label>
        Password:
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value.trim())}
          value={password}
        />
      </label>
      <label>
        First Name:
        <input
          type={"text"}
          onChange={(e) => setFirstname(e.target.value.trim())}
          value={firstname}
        />
      </label>
      <label>
        Last Name:
        <input
          type={"text"}
          onChange={(e) => setLastname(e.target.value.trim())}
          value={lastname}
        />
      </label>
      <button onClick={handleClickRegister}>Register</button>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  );
};

export default Register;
