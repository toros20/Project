import React from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom'
import Sidebar from './components/Sidebar'

import listBudgets from './components/listBudgets'
import Navbar from './components/Navbar'
import projectDashboard from './pages/ProjectDashboard'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Sidebar />
            <Route path="/budgets" exact component ={listBudgets} /> 
            <Route path="/project/:id" exact component ={projectDashboard} /> 
      </Router>
    </div>
  );
}

export default App;
