/*import React from 'react';


class Login2 extends Component{

    constructor(props){
        super(props);
        this.connect=this.connect.bind(this)
    }

    connect(){
        alert('non');
    }

    return(
      <button onClick={alert("pas bon")}>
       Se connecter 
       </button>
    )
}

export default Login2;*/

import React from 'react';


function Login2() {

  let username;
  let password;

  function connect(a,b) {
    if(a=='1' && b=='2')
    {alert('ok');}
    else
    {alert ('non');}
  }
  
  return (
    <div className="Login2">
    Utilisateur <input type="text" onChange={username => username.target.value} />
    Password <input type="text" onChange={password => password.target.value} />
    <button onClick={ connect.bind(this,username,password) }>
      connexion
    </button>
    </div>  
  );
}

export default Login2;