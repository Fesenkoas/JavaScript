import React, { useState } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Body from './components/Body';
import Nav from './components/Nav';
import { TwitterContext } from './utils/context';

const App =() => {
  const [user, setUser] = useState(
    {
      avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
      name: 'Monster'
    }
  )
  const [stats,setStats] = useState({
    followers: 100,
    following: 300
  })
 const changeAvatar = (url) =>{
  setUser(prevUser => ({...prevUser, avatar: url || prevUser.avatar}));
 }

  
    return (
      <div className='app'>
        <TwitterContext.Provider value={{
          stats, user, changeAvatar
        }}>
          <Nav> 
            <Avatar/>
          </Nav>
          <Body />
        </TwitterContext.Provider>
      </div>
    );

}

export default App;
