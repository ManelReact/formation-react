import logo from './kobo.png';
import Login from './Login';
import Login2 from './Login2.js';
import Page2 from './Page2.js';
import Menu from './Menu';
import Recherche from './Recherche';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from
  'react-router-dom';
import { Link } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path='/Menu' component={Menu} />
          <Route path='/Page2' component={Page2} />
        </Switch>
        <nav>
          <ul>
            <li><Link to='/' >Page1</Link></li>
            <li><Link to='/Page2' >Page2</Link></li>
          </ul>
        </nav>
      </Router>
      <Login />
      <Login2 />
      <Recherche />
    </div>

  );
}

export default App;
