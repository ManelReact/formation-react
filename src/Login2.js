
import React, { useState } from 'react';

function Login2() {

 
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);

  function connect(username,password) {
    if(username=='toto' && password=='toto')
    {alert('ok');}
    else
    {alert ('non');}
  }

 
  return (
    <div className="Login2">
    Utilisateur <input type="text" onChange={e =>setUsername(e.target.value)} />
    Password <input type="text" onChange={e =>setPassword(e.target.value)} />
    <button onClick={ connect.bind(this,username,password) }>
      connexion
    </button>
    </div>  
  );
}

export default Login2;
/*
import React, { Component } from 'react';
import Page2 from './Page2.js';
import { BrowserRouter as Router, Redirect, Route, Switch } from
  'react-router-dom';
import { Link } from 'react-router-dom'

class Login2 extends Component {

  constructor(props) {
    super(props);
    //this.connect=this.connect.bind(this)
    this.state = {
      username: '',
      password: '',
    }
  }

  connect() {
    if (this.state.username == '1' && this.state.password == '2')
      alert('ok');
    else
      alert('not ok');
  }

  log() {
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    return (
      <div className="Login2">
        Utilisateur <input type="text" onChangeText={(text) => this.setState({ username: text })} />
    Password <input type="text" onChangeText={(text) => this.setState({ password: text })} />
        <button onClick={this.connect.bind(this)}>
          connexion
    </button>
      </div>
    )
  }
}
export default Login2;*/