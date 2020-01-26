import React, { Component } from 'react'
import axios from 'axios'

export default class TableCost extends Component {
    
    constructor() {
        super();
        this.state = {
            budgetLines:[],
            total_disonible:0.0,
            total_ejecutado:0.0,
            total_inicial:0.0
        }
    }
    
    async componentDidMount(){

        const res = await axios.post('http://localhost:4000/api/budgetlines/project/'+this.props.idProject);
        this.setState({budgetLines:res.data.budgetLines});
    }

    render() {
      
        return (
            <div>
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
                                            
                                            <tr>
                                                                                                  
                                               
                                                <td className="pro-name">
                                                    <label className="text-danger">{budgetLine.code}</label>
                                                </td>
                                                <td className="pro-name">
                                                    <h6>{budgetLine.name}</h6>
                                                    <span>{budgetLine.description}</span>
                                                </td>
                                                <td>  
                                                    <label >{budgetLine.person.fullname}</label>
                                                </td>
                                                <td>
                                                    <label className="text-success">{budgetLine.buddgetstart}</label>
                                                </td>
                                                <td>
                                                    <label className="text-info">{budgetLine.buddgetfinal}</label>
                                                </td>
                                                <td>
                                                    <label className="text-warning">{budgetLine.balance}</label>
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
                                                    <label className="text-success">750,000.00</label>
                                                </td>
                                                <td>
                                                    <label className="text-info">710,000.00</label>
                                                </td>
                                                <td>
                                                    <label className="text-warning">40,000.00</label>
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
                        {/* Add Contact Start Model start*/}
                       {/*  <div className="md-modal md-effect-13 addcontact" id="modal-13">
                        <div className="md-content">
                            <h3 className="f-26">Crear Nuevo</h3>
                            <div>
                            <div className="md-group-add-on">
                                <input type="file" name="files" id="filer_input_single" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="icofont icofont-user" /></span>
                                <input type="text" className="form-control pname" placeholder="Prodcut Name" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="icofont icofont-user" /></span>
                                <input type="text" className="form-control pamount" placeholder="Amount" />
                            </div>
                            <div className="input-group">
                                <select id="hello-single" className="form-control stock">
                                <option value>---- Select Stock ----</option>
                                <option value="married">In Stock</option>
                                <option value="unmarried">Out of Stock</option>
                                <option value="unmarried">Law Stock</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-primary waves-effect m-r-20 f-w-600 d-inline-block save_btn">Save</button>
                                <button type="button" className="btn btn-primary waves-effect m-r-20 f-w-600 md-close d-inline-block close_btn">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="md-overlay" /> */}
                        {/* Add Contact Ends Model end*/}
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
