import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Projectcard extends Component {

    constructor() {
        super();
        this.state = {

            budgetLines:[],
            total_disponible:0.0,
            total_ejecutado:0.0,
            total_inicial:0.0,
        }
    }

    async componentDidMount(){
        const res = await axios.post('http://localhost:4000/api/budgetlines/project/'+this.props.id);
        this.setState({budgetLines:res.data.budgetLines});
    }

    calculo(){ // para realizar el calculo de la suma de presupuestos
        for (let index = 0; index < this.state.budgetLines.length; index++) {
            this.state.total_inicial= this.state.total_inicial + this.state.budgetLines[index].buddgetstart;
            this.state.total_ejecutado= this.state.total_ejecutado +this.state.budgetLines[index].buddgetfinal;
            this.state.total_disponible= this.state.total_disponible + this.state.budgetLines[index].balance;
        }
    }

    render() {
        this.calculo();
        return (
           
                <div className="col-sm-6">
                    <div className="card card-border-default">
                        <div className="card-header">
                            <Link to={'/project/'+this.props.id}  className="card-title" >{this.props.name}</Link>
                            <span className="label label-warning f-right">  {this.props.startdate} </span>
                            <span className="label label-danger f-right">  {this.props.enddate} </span>
                        </div>
                        <div className="card-block">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="task-detail">{this.props.description} </p>
                                    <hr/>
                                    <p className="task-due">
                                        <strong> Ubiación : </strong><strong className="label label-warning">{this.props.location} </strong>
                                        <strong> Estatus : </strong><strong className="label label-danger">{this.props.status}  </strong>
                                        <strong> Prioridad : </strong><strong className="label label-warning">{this.props.priority} </strong>
                                    </p>
                                </div>
                                {/* end of col-sm-8 */}
                            </div>
                            {/* end of row */}
                        </div>
                        <div className="card-footer">
                            <div className="task-list-table">
                                <a href="#!"><img className="img-fluid img-circle" src="assets/images/avatar-1.png" alt={1} /></a>
                                <a href="#!"><img className="img-fluid img-circle" src="assets/images/avatar-2.png" alt={1} /></a>
                                <a href="#!"><i className="icofont icofont-plus" /></a>
                            </div>
                            <div className="task-board">
                                <div >  
                                        <button className="btn btn-primary  waves-effect waves-light" type="button"  >LPS. {this.state.total_inicial} </button>
                                        <button className="btn btn-danger  waves-effect waves-light" type="button"  >LPS. {this.state.total_ejecutado} </button>
                                        <button className="btn btn-success  waves-effect waves-light" type="button"  >LPS. {this.state.total_disponible} </button>

                                        {/* end of dropdown menu */}
                                </div>
                                 {/* end of dropdown-secondary */}
                                    
                                </div>
                                {/* end of pull-right class */}
                            </div>
                            {/* end of card-footer */}
                        </div>
                    </div>
           
        )
    }
}
