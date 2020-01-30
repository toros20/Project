import React, { Component } from 'react'

export default class ListCategories extends Component {
    render() {
        return (
            <div>
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/* Main-body start */}
                        <div className="main-body">
                        <div className="page-wrapper">
                            {/* Page-header start */}
                            <div className="page-header mt-5">
                            <div className="page-header-title">
                                <h4>Gestión de Categorias</h4>
                                <span>Control y Administración de las categorias</span>
                            </div>
                            <div className="page-header-breadcrumb">
                                <ul className="breadcrumb-title">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                    <i className="icofont icofont-home" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Categorias</a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Listar</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                            {/* Page-header end */}
                            {/* Page-body start */}
                            <div className="page-body">
                           
                          
                            {/* Hover table card start */}
                            <div className="card">
                                <div className="card-header">
                                <h5>Listado de Categorias</h5>
                                <div><button type="button" className="btn btn-primary waves-effect waves-light f-right d-inline-block md-trigger" data-modal="modal-13"> <i className="icofont icofont-plus m-r-5" /> Crear Nuevo </button></div>
                                <div className="card-header-right">
                                    <i className="icofont icofont-rounded-down" />
                                    <i className="icofont icofont-refresh" />
                                    <i className="icofont icofont-close-circled" />
                                </div>
                                </div>
                                <div className="card-block table-border-style">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Categoria</th>
                                        <th>Descripción</th>
                                        <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            {/* Hover table card end */}

                         
                            </div>
                            {/* Page-body end */}
                        </div>
                        </div>
                        {/* Main-body end */}
                        <div id="styleSelector">
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}
