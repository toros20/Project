import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Inicio from './components/Inicio'
import listProjects from './components/listProjects'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <h1>Hello World</h1>
        <Route path="/" exact component ={Inicio} />
        <Route path="/projects" exact component ={listProjects} />
      </Router>
    </div>
  );
}

export default App;
