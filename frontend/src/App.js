import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'

import Atlas from './pages/Atlas'
import AtlasAccount from './pages/AtlasAccount'

import listBudgets from './components/listBudgets'
import Navbar from './components/Navbar'
import projectDashboard from './pages/ProjectDashboard'
import BudgetNew from './pages/BudgetNew'
import ListProjects from './pages/ListProjects'
import ProjectNew from './pages/ProjectNew'
import ListCategories from './pages/ListCategories'
import BudgetLineNew from './pages/BudgetLineNew'


import pageSupplierslist from './pages/Suppliers_list'
import Users_list from './pages/Users_list'
import Teams_list from './pages/Teams_list'

import Account_list from './pages/Accounts'
import AccountDashboard from './pages/AccountDashboard'


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Sidebar />
            <Route path="/atlas" exact component ={Atlas} />
            <Route path="/atlas_accounts" exact component ={AtlasAccount} />
            <Route path="/budgets" exact component ={listBudgets} />
            <Route path="/budgets/new" exact component ={BudgetNew} /> 
            <Route path="/budgetline/new" exact component ={BudgetLineNew} /> 
            <Route path="/categories" exact component ={ListCategories} /> 
            <Route  path="/projects" exact  component ={ListProjects} /> 
            <Route  path="/projects/new" exact  component ={ProjectNew} /> 
            <Route  path="/project/:id" exact  component ={projectDashboard} /> 

            <Route path="/suppliers_list" exact component={pageSupplierslist} />
            <Route path="/users_list" exact component={Users_list} />
            <Route path="/teams_list" exact component={Teams_list} />

            <Route path="/accounts" exact component={Account_list} />
            <Route  path="/account/:id" exact  component ={AccountDashboard} /> 


      </Router>
    </div>
  );
}

export default App;
