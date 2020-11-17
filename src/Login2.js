import React from 'react';
const connect = msgOk=>{
    console.log("truc")
}

function Login2(){
    return(
        <div className="Login2">
            Utilisateur <input type="text" />
            Mot de passe <input type="password" />
            <button>Se connecter </button>
        </div>
    )
}

export default Login2;