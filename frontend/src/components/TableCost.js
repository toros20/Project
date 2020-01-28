import React, { Component } from 'react'
import axios from 'axios'
import RowCardsProjects from '../components/RowCardsProjects'
import RowBudget from '../components/RowBudget'

export default class TableCost extends Component {
    
    constructor() {
        super();
        this.state = {
            budgetLines:[],
            budgetLinesCat:[],
            total_disonible:0.0,
            total_ejecutado:0.0,
            total_inicial:0.0,

            porcentaje_disponible:0.0,
            porcentaje_ejecutado:0.0
        }
    }
    
    async componentDidMount(){

        const res = await axios.post('http://localhost:4000/api/budgetlines/project/'+this.props.idProject);
        this.setState({budgetLines:res.data.budgetLines});

        const res2 = await axios.post('http://localhost:4000/api/budgetlines/cat_project/'+this.props.idProject);
        this.setState({budgetLinesCat:res2.data.budgetCategories});

    }

    calculo(){ // para realizar el calculo de la suma de presupuestos

        this.state.total_inicial=0.0;this.state.total_ejecutado=0.0; this.state.total_disonible=0.0;
        for (let index = 0; index < this.state.budgetLines.length; index++) {
            this.state.total_inicial= this.state.total_inicial + this.state.budgetLines[index].buddgetstart;
            this.state.total_ejecutado= this.state.total_ejecutado +this.state.budgetLines[index].buddgetfinal;
            this.state.total_disonible= this.state.total_disonible + this.state.budgetLines[index].balance;
        }

        this.porcentaje_ejecutado = (this.state.total_ejecutado * 100 )/this.state.total_inicial;
        this.porcentaje_disponible = (this.state.total_disonible * 100 )/this.state.total_inicial;

    }

    render() {

      this.calculo();
      
        return (
            <div>
               
                <RowCardsProjects 
                    inicial={this.state.total_inicial} 
                    ejecutado={this.state.total_ejecutado}
                    disponible={this.state.total_disonible}
                    porcentaje_ejecutado={this.porcentaje_ejecutado}
                    porcentaje_disponible={this.porcentaje_disponible}
                />

                {/* Page body start */}
                <div className="page-body">
                <div className="row">
                    <div className="col-sm-12">
                    {/* Product list card start */}
                    <div className="card product-add-modal">
                        <div className="card-header">
                            <h5>Renglones Presupuestarios  </h5>
                            <button type="button" className="btn btn-primary waves-effect waves-light f-right d-inline-block md-trigger" data-modal="modal-13"> <i className="icofont icofont-plus m-r-5" /> Crear Nuevo
                            </button>
                        </div>
                        
                        {this.state.budgetLinesCat.map(bLinesCat => 
                           
                            <RowBudget idCat={bLinesCat.category_id}  idProject={this.props.idProject} />
                           
                        )}

                    </div>
                    {/* Product list card end */}
                    </div>
                </div>
                </div>
                {/* Page body end */}

            </div>
        )
    }
}
