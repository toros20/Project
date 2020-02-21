import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Projectcard from '../components/Projectcard'

export default class TabBudget extends Component {

    constructor() {
        super();
        this.state = {
            projects:[]
        }
    }
    
    async componentDidMount(){
        const res_p = await axios.post('http://localhost:4000/api/projects/findProjectsByBudgetId/'+this.props.id);
        this.setState({projects:res_p.data.projectsbybudgetid});
    }

    formatMoney(number) {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'HNL' });
    }

    render() {
        return (
             <div> 
                 <div className="page-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                   <a href="#"> <h4>{this.props.nombre} - ( {this.props.account}) </h4></a>
                                    <span>{this.props.description}</span>
                                    <div className="card-header-right">
                                        <i className="icofont icofont-rounded-down"></i>
                                        <i className="icofont icofont-refresh"></i>
                                        <i className="icofont icofont-close-circled"></i>
                                    </div>

                                    <div>
                                       
                                        <table className="table"> 
                                            <thead>
                                                <th>Presupuesto Asignado</th>
                                                <th>Presupuesto Ejecutado</th>
                                                <th>Reembolsos Realizados</th>
                                                <th>Presupuesto Disponible</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><button  style={{width: '100%'}} className="btn btn-lg btn-primary  waves-effect waves-light" type="button"  >{this.formatMoney( this.props.budgetstart)}</button></td>
                                                    <td><button  style={{width: '100%'}}  className="btn btn-lg btn-danger  waves-effect waves-light" type="button"  >{this.formatMoney(this.props.buddgetupdate)} </button></td>
                                                   
                                                    <td><button  style={{width: '100%'}} className="btn btn-lg btn-warning  waves-effect waves-light" type="button"  >{this.formatMoney(this.props.returns)}</button></td>
                                                    <td><button  style={{width: '100%'}} className="btn btn-lg btn-success  waves-effect waves-light" type="button"  >{this.formatMoney(this.props.balance)} </button></td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                       
                                    </div>
                                    
                                
                                    {/* end of pull-right class */}
                                 
                                </div>
                                <div className="card-block">
                                    <div className="row">
                                        
                                        {
                                            this.state.projects.map( project =>   
                                            <Projectcard 
                                               name={project.name}
                                               id={project.id}
                                               startdate={project.startdate}
                                               enddate={project.enddate}
                                               description={project.description}
                                               status={project.status}
                                               priority={project.priority}
                                               location={project.location}
                                               
                                            />
                                            )
                                        }

                                        <div className="col-sm-6">
                                        <div className="card card-border-default">
                                            <div className="card-header" align="center">
                                                
                                              <Link to={'/projects/new'} ><h3>Crear Nuevo Projecto</h3></Link>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12" align="center">
                                                   
                                                    <Link to={'/project/new'} ><i style={{color:'#54d98c'}} className="icofont icofont-plus-circle icofont-5x "></i></Link>
                                                   
                                                    </div>
                                                    {/* end of col-sm-8 */}
                                                </div>
                                                {/* end of row */}
                                            </div>
                                            <div className="card-footer">
                                            <div className="task-list-table">
                                                <a href="#!"><img className="img-fluid img-circle" src="assets/images/avatar-1.png" alt={1} /></a>
                                                <a href="#!"><img className="img-fluid img-circle" src="assets/images/avatar-2.png" alt={1} /></a>
                                              
                                            </div>
                                            <div className="task-board">
                                                <div >  
                                                        <button className="btn btn-primary  waves-effect waves-light" type="button"  >LPS. {this.state.total_inicial} </button>
                                                        <button className="btn btn-danger  waves-effect waves-light" type="button"  >LPS. {this.state.total_ejecutado} </button>
                                                        <button className="btn btn-success  waves-effect waves-light" type="button"  >LPS. {this.state.total_disponible} </button>

                                                        {/* end of dropdown menu */}
                                                </div>
                                                
                                                {/* end of dropdown-secondary */}
                                                    
                                                </div> <hr/>
                                                {/* end of pull-right class */}
                                        </div>
                                        {/* end of card-footer */}
                                            </div>
                                    </div>
                                        
                                    </div>

                                   



                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div> /* div FINAL*/  
        )
    }
}
