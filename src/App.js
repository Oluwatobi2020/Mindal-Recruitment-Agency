import React from 'react';
import NavBar from '../src/components/NavBar/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
