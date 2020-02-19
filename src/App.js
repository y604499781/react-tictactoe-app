import React from 'react';
import './App.css';
import Game from './components/TicTacToe/index.js';

class Login extends  React.Component{
  clickHandler() {
    console.log("User is logging on");
    console.log(this);
  }
  render() {
  return <div>
    <input type="text"/>
    <input type="text"/>
    <input type="button" value="Login" onClick={() => this.clickHandler()} />
  </div>;
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {loggedIn:false}
  }
  
  render() {
    let returnComponent;
    const login = <Login />;
    const game = <Game />;
    if(!this.state.loggedIn){
      returnComponent = login;
    }
    else{
      returnComponent = game;
    }
    return returnComponent;
  }
}

export default App;
