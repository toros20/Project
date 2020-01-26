import React, { Component } from 'react'
import axios from 'axios'

import TabBudget from '../components/TabBudget'

export default class listBudgets extends Component {

    constructor() {
        super();
        this.state = {
            budgets:[]
        }
    }
    
    async componentDidMount(){
      const res = await axios.get('http://localhost:4000/api/budgets/');
      this.setState({budgets:res.data.budgets});
    }

    render() {
        return (
            <div>
                <div class="pcoded-content">
                    <div class="pcoded-inner-content">
                        <div class="main-body">
                            <div class="page-wrapper">
                                <div class="page-header page-wrapper">
                                    <div class="page-header-title">
                                        <h4>Presupuestos</h4>
                                        <span>Listado de Presupuestos Creados</span>
                                    </div>
                                    <div class="page-header-breadcrumb">
                                        <ul class="breadcrumb-title">
                                            <li class="breadcrumb-item">
                                                <a href="index.html">
                                                    <i class="icofont icofont-home"></i>
                                                </a>
                                            </li>
                                            <li class="breadcrumb-item"><a href="#!">Pages</a>
                                            </li>
                                        </ul>
                                    </div>
                                 </div>
                                 
                                {
                                    this.state.budgets.map( budget =>   
                                      <TabBudget 
                                        nombre={budget.name} 
                                        id={budget.id} 
                                        description={budget.description} 
                                     />
                                    )
                                }
                            </div>
                        </div>
                        <div id="styleSelector">
                            
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
