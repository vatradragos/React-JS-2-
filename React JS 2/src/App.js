import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Tears from './components/pages/Tears';
import Help from './components/pages/Help';
import WarsNow from './components/pages/WarsNow';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tears' component={Tears} />
          <Route path='/help' component={Help} />
          <Route path='/wars-now' component={WarsNow} />
        </Switch>
      </Router>
    </>
  );
}

export default App;