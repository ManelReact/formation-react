/*import React from 'react';

function Login2() {

 
  let [ username, password] = useState('');
  
  function connect(a,b) {
    if(a=='1' && b=='2')
    {alert('ok');}
    else
    {alert ('non');}
  }
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div className="Login2">
    Utilisateur <input type="text" onChange={e => e.username(e.target.value)} />
    Password <input type="text" onChange={e=> e.password(e.target.value)} />
    <button onClick={ connect.bind(this,e.username,e.password) }>
      connexion
    </button>
    </div>  
  );
}

export default Login2;*/

import React, { Component } from 'react';


class Login2 extends Component{

    constructor(props){
        super(props);
        //this.connect=this.connect.bind(this)
        this.state = {
          username: '',
          password: '',
        }
    }

    connect() {
      if(this.state.username=='1' && this.state.password=='2')
      alert('ok');
      else
      alert ('non');
    }

    log() {
      console.log(this.state.username);
      console.log(this.state.password);
   }

    render(){
      return(
       <div className="Login2">
    Utilisateur <input type="text" onChangeText={(text) => this.setState({username:text})} />
    Password <input type="text" onChangeText={(text) => this.setState({password:text})} />
    <button onClick={ this.connect.bind(this)}>
      connexion
    </button>
    </div>  
      )
   }
}
export default Login2;