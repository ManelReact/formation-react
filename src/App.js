import logo from './kobo.png';
import Login from './Login';
import Login2 from './Login2.js';
import Menu from './Menu';
import Recherche from './Recherche';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from
'react-router-dom';

function App() {
  return (
    <div className="App">
      <Login />
      <Login2 />
      <Recherche />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
