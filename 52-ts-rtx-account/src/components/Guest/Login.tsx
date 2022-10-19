import React, {useState} from 'react'

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
  
    const handleClickLogin = () =>{
  
    }
  
    const handleClickClear = () =>{
      setLogin('')
      setPassword('')
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
       
        <button onClick={handleClickLogin}>Register</button>
        <button onClick={handleClickClear}>Clear</button>
      </div>
    );
}

export default Login