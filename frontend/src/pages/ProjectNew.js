import React, { Component } from 'react'

export default class ProjectNew extends Component {
    render() {
        return (
            <div className="pcoded-content">
            <div className="pcoded-inner-content">

                <div className="main-body">
                    <div className="page-wrapper">
                        <div className="page-header page-wrapper mt-3 ">
                            <div className="page-header-title">
                                <h4>Crear un nuevo Proyecto</h4>
                                <span>Creación de Nuevos Controles de Proyectos</span>
                            </div>
                           
                        </div>
                        <div className="page-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Formulario de Creación</h5>
                                            <span>Ingrese correctamente cada uno de los datos solicitados.</span>
                                            <div className="card-header-right">
                                                <i className="icofont icofont-rounded-down"></i>
                                                <i className="icofont icofont-refresh"></i>
                                                <i className="icofont icofont-close-circled"></i>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                        <div>
                                            <p>
                                            </p><div className="card-block">
                                                
                                                <form>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Código de Identificación</label>
                                                    <div className="col-sm-10">
                                                    <input type="text" className="form-control" placeholder="Código del Proyecto" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Nombre del Proyecto</label>
                                                    <div className="col-sm-10">
                                                    <input required type="text" className="form-control" placeholder="Ingrese un Nombre al Proyecto" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Ubicación del Proyecto</label>
                                                    <div className="col-sm-10">
                                                    <input required type="text" className="form-control" placeholder="Ingrese la ubicación al Proyecto" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Descripción del Proyecto</label>
                                                    <div className="col-sm-10">
                                                    <textarea rows={5} cols={5} className="form-control" placeholder="Default textarea" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Prioridad del Proyecto</label>
                                                    <div className="col-sm-10">
                                                    <select name="select" className="form-control">
                                                        <option value="opt1">Seleccione Prioridad</option>
                                                        <option value="opt2">Prioridad Alta</option>
                                                        <option value="opt3">Prioridad Media</option>
                                                        <option value="opt4">Prioridad Baja</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Presupuesto al que pertenece</label>
                                                    <div className="col-sm-10">
                                                    <select name="select" className="form-control">
                                                        <option value="opt1">Seleccione Presupuesto</option>
                                                        <option value="opt2">Presupuesto I Semestre 2020</option>
                                                        <option value="opt3">Presupuesto I Semestre 2019</option>
                                                        <option value="opt4">Presupuesto II Semestre 2019</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Equipo de trabajo para Proyecto</label>
                                                    <div className="col-sm-10">
                                                    <select name="select" className="form-control">
                                                        <option value="opt1">Seleccione Equipo de trabajo</option>
                                                        <option value="opt2">Equipo 1</option>
                                                        <option value="opt3">Equipo 2</option>
                                                        <option value="opt4">Equipo 3</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Fecha de Inicio</label>
                                                    <div className="col-sm-10">
                                                        <input class="form-control" type="date" placeholder="Inicio del Proyecto" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Fecha de Finalización</label>
                                                    <div className="col-sm-10">
                                                        <input class="form-control" type="date" placeholder="Fin del Proyecto" />
                                                    </div>
                                                </div>
                                              
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Estado del Presupuesto</label>
                                                    <div className="col-sm-10">
                                                    <select name="select" className="form-control">
                                                        <option value="opt1">Selecione Estado</option>
                                                        <option value="opt2">Aprobado</option>
                                                        <option value="opt3">En espera</option>
                                                        <option value="opt3">Iniciado</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label className="col-sm-4 col-lg-2 col-form-label">Guardar Presupuesto</label>
                                                    <div className="col-sm-8 col-lg-10">
                                                        <div className="input-group">
                                                        <input type="submit" className="btn btn-lg btn-success" />
                                                        </div>
                                                    </div>
                                                </div>
                                              
                                                </form>
                                               
                                            </div>
                                            </div>
                                        <p />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="styleSelector">

                </div>
            </div>
        </div>
        )
    }
}
