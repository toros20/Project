import React, { Component } from 'react'
import TableCost from '../components/TableCost'
import {Link} from 'react-router-dom'

export default class ProjectDashboard extends Component {

    render() {
      
        return (
            <div>
                 <div class="pcoded-content">
                    <div class="pcoded-inner-content">
                        <div class="main-body">
                            <div class="page-wrapper">
                                <div class="page-header page-wrapper">
                                    <div class="page-header-title">
                                        <h4>Renglones Presupuestarios</h4>
                                        <span>Descripcción de los costos y gastos.</span>
                                    </div>
                                    <div class="page-header-breadcrumb">
                                        <ul class="breadcrumb-title">
                                            <li class="breadcrumb-item">
                                                <a href="index.html">
                                                    <i class="icofont icofont-home"></i>
                                                </a>
                                            </li>
                                            <li class="breadcrumb-item"><Link to={'/budgets' }>Presupuestos</Link>
                                            </li>
                                            <li class="breadcrumb-item">Renglones
                                            </li>
                                        </ul>
                                    </div>
                                 </div>
                                <TableCost idProject={this.props.match.params.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
