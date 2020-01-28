import React, { Component } from 'react'
import axios from 'axios'

export default class RowBudget extends Component {
    
    constructor() {
        super();
        this.state = {
            budgetLines:[],
            total_disonible:0.0,
            total_ejecutado:0.0,
            total_inicial:0.0,

             nameCategory:"Gastos",

        }
    }
    
    async componentDidMount(){

        const res = await axios.post('http://localhost:4000/api/budgetlines/project/category/'+this.props.idProject+'/'+this.props.idCat);
        this.setState({budgetLines:res.data.budgetLinesCat});

        const res3 = await axios.post('http://localhost:4000/api/categories/categoriesbyid/'+this.props.idCat);
        this.setState({nameCategory:res3.data.category.name});
    }

    calculo(){ // para realizar el calculo de la suma de presupuestos

        for (let index = 0; index < this.state.budgetLines.length; index++) {

            this.state.total_inicial= this.state.total_inicial + this.state.budgetLines[index].buddgetstart;
            this.state.total_ejecutado= this.state.total_ejecutado +this.state.budgetLines[index].buddgetfinal;
            this.state.total_disonible= this.state.total_disonible + this.state.budgetLines[index].balance;   
        }
    }

    render() {
        this.calculo();

        return (
            <div>   <hr/><h4 className="ml-5 mt-2">{this.state.nameCategory}</h4>
                    <div className="card-block">
                        <div className="table-responsive">
                            <div className="table-content">
                            <div className="dt-responsive table-responsive">
                                <table id="e-product-list" className="table table-striped table-bordered nowrap">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Proveedor</th>
                                        <th>Inicial</th>
                                        <th>Ejecutado</th>
                                        <th>Discponible</th>
                                        <th>Estado</th>
                                        <th>Aprovado</th>
                                        <th>Fecha de Aprovación</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.budgetLines.map( budgetLine =>   
                                           
                                            <tr key= {budgetLine.id} >                             
                                                {/* {this.suma(budgetLine.buddgetstart, budgetLine.buddgetfinal,budgetLine.balance)}  */}
                                                
                                                <td className="pro-name">
                                                    <label className="text-danger">{budgetLine.code}</label>
                                                </td>
                                                <td className="pro-name">
                                                    <h6>{budgetLine.name}</h6>
                                                 
                                                </td>
                                                <td>  
                                                    <label >{budgetLine.person.fullname}</label>
                                                </td>
                                                <td>
                                                    <label className="text-success">LPS. {budgetLine.buddgetstart}</label>
                                                </td>
                                                <td>
                                                    <label className="text-info">LPS. {budgetLine.buddgetfinal}</label>
                                                </td>
                                                <td>
                                                    <label className="text-warning">LPS. {budgetLine.balance}</label>
                                                </td>
                                                <td>
                                                    <label >{budgetLine.status}</label>
                                                </td>
                                                <td>
                                                    <label  >{budgetLine.approvalby_id}</label>
                                                </td>
                                                <td>
                                                    <label  >{budgetLine.dateapproval}</label>
                                                </td>
                                            
                                                <td className="action-icon"> 
                                                    <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                                                    <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                                                </td>
                                            </tr>
                                       
                                        )
                                    }
                                    
                                    <tr>
                                        <td className="pro-name">
                                            <label className="text-danger">---</label>
                                        </td>
                                        <td className="pro-name">
                                            <h6>Total de Prespuesto</h6>
                                            <span>Suma de los Totales</span>
                                        </td>
                                        <td>  
                                            <label >---</label>
                                        </td>
                                        <td>
                                            <label className="text-success">{this.state.total_inicial}</label>
                                        </td>
                                        <td>
                                            <label className="text-info">{this.state.total_ejecutado}</label>
                                        </td>
                                        <td>
                                            <label className="text-warning">{this.state.total_disonible}</label>
                                        </td>
                                        <td>
                                            <label >---</label>
                                        </td>
                                        <td>
                                            <label  >---</label>
                                        </td>
                                        <td>
                                            <label  >---</label>
                                        </td>
                                    
                                        <td className="action-icon"> 
                                            <a href="#!" className="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="icofont icofont-ui-edit" /></a>
                                            <a href="#!" className="text-muted" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="icofont icofont-delete-alt" /></a>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                                
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
