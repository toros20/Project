import React, { Component } from 'react'


export default class RowCardsProjects extends Component {

    render() {
        return (
            <div>
                <div className="row">
                {/* statstic card start */}
                <div className="col-md-12 col-xl-4">
                    <div className="card widget-statstic-card borderless-card">
                    <div className="card-header">
                        <div className="card-header-left">
                        <h5>Presupuesto Inicial</h5>
                        <p className="p-t-10 m-b-0 text-muted">Total de Presupuesto Inicial</p>
                        </div>
                    </div>
                    <div className="card-block">
                        <i className="icofont icofont-presentation-alt st-icon bg-primary" />
                        <div className="text-left">
                        <h3 className="d-inline-block">LPS. {this.props.inicial} </h3>
                        
                        <span className="f-right bg-primary">100%</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* statstic card end */}
                {/* statstic card start */}
                <div className="col-md-6 col-xl-4">
                    <div className="card widget-statstic-card borderless-card">
                    <div className="card-header">
                        <div className="card-header-left">
                        <h5>Presupuesto Ejecutado</h5>
                        <p className="p-t-10 m-b-0 text-muted">Total del Presupuesto que ha sido ejecutado</p>
                        </div>
                    </div>
                    <div className="card-block">
                        <i className="icofont icofont-presentation-alt st-icon bg-warning txt-lite-color" />
                        <div className="text-left">
                        <h3 className="d-inline-block">LPS. {this.props.ejecutado}</h3>
                        <i className="icofont icofont-long-arrow-down text-danger f-30 " />
                        <span className="f-right bg-danger">{Math.round(this.props.porcentaje_ejecutado)}%</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* statstic card end */}
                {/* statstic card start */}
                <div className="col-md-6 col-xl-4">
                    <div className="card widget-statstic-card borderless-card">
                    <div className="card-header">
                        <div className="card-header-left">
                        <h5>Presupuesto Disponible</h5>
                        <p className="p-t-10 m-b-0 text-muted">Total del presupuesto que está disponible</p>
                        </div>
                    </div>
                    <div className="card-block">
                        <i className="icofont icofont-chart-line st-icon bg-success" />
                        <div className="text-left">
                        <h3 className="d-inline-block">LPS. {this.props.disponible}</h3>
                        <i className="icofont icofont-long-arrow-up f-30 text-success" />
                        <span className="f-right bg-success">{Math.round(this.props.porcentaje_disponible)}%</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* statstic card end */}
              
                </div>
            </div>
        )
    }
}
