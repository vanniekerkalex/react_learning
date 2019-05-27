import React from 'react';
import Logo from './Logo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Testing Routes & Styles</h1>
        <Link to="/"><h3>/</h3></Link>
        <Link to="/yes"><h3>/yes</h3></Link>
        <Link to="/no"><h3>/no</h3></Link>
        <Link to="/all"><h3>/all</h3></Link>
        {/* <Switch> */}
        <Route path="/yes" exact component={Logo} />
        <Route path="/no" exact component={Logo} />
        <Route path='/all' render={props =>
          <div>
            <Logo />
            <Logo />
          </div>
        } />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
