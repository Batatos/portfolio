import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './components/Root';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Explore from './components/Explore';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
          <Root/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/portfolio" exact component={Home}/>
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/explore" component={Explore} />
          </Switch>
      </Router>
      
  
    </div>
  );
}

export default App;
