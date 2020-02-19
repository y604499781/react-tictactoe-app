import React from 'react';
import './App.css';
import Game from './components/TicTacToe/index.js';


class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {loggedIn:false,
      users:[{username:"test",password:"test"}]
    }
  }
  logInUser(loggedInStatus)
  {
    this.setState({loggedIn:loggedInStatus});
  }
  render() 
  {
    return(
    let returnComponent;
    const login = <Login users={this.state.users}
      loginUser={() => this.logInUser(true)}/>;
    const game = <Game logOutUser={() => this.logInUser(false)} />;
    if(!this.state.loggedIn)
    {
      returnComponent = login;
    }
    else
    {
      returnComponent = game;
    }
    return returnComponent;
    )
  }
}

export default App;
