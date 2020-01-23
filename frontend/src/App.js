import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Inicio from './components/Inicio'
import listProjects from './components/listProjects'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Sidebar />
       {/*  <Route path="/" exact component ={Inicio} />
        <Route path="/projects" exact component ={listProjects} /> */}
      </Router>
    </div>
  );
}

export default App;
