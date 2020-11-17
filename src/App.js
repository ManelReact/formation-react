import logo from './kobo.png';
import Login from './Login';
import Login2 from './Login2';
import Menu from './Menu';
import Recherche from './Recherche';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Login2 />
      <Recherche />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site de quelque chose
        </p>
      </header>
    </div>
  );
}

export default App;
