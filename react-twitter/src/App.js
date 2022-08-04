import React from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Body from './components/Body';
import Nav from './components/Nav';
import { TwitterContext } from './utils/context';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
        name: 'Monster'
      },
      stats: {
        followers: 100,
        following: 300
      }
    }
  }

  changeAvatar = url => {
    const user = {...this.state.user};
    user.avatar = url || this.state.user.avatar;
    this.setState({user});

    // this.setState({
    //   user: {
    //     avatar: url || this.state.user.avatar,
    //     name: this.state.user.name
    //   }
    // });
  }

  render() {
    return (
      <div className='app'>
        <TwitterContext.Provider value={{
          stats: this.state.stats,
          user: this.state.user,
          changeAvatar: this.changeAvatar
        }}>
          <Nav> 
            <Avatar/>
          </Nav>
          <Body />
        </TwitterContext.Provider>
      </div>
    );
  }

}

export default App;
