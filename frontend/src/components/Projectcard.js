import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Projectcard extends Component {
    render() {
        return (
           
                <div className="col-sm-6">
                    <div className="card card-border-default">
                        <div className="card-header">
                            <Link to={'/project/'+this.props.id}  className="card-title" >{this.props.name}-{this.props.id}</Link>
                            <span className="label label-default f-right"> 28 January, 2015 </span>
                        </div>
                        <div className="card-block">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="task-detail">A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.</p>
                                    <p className="task-due"><strong> Due : </strong><strong className="label label-danger">23 hours</strong></p>
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
                                <div className="dropdown-secondary dropdown">
                                        <button className="btn btn-primary btn-mini dropdown-toggle waves-effect waves-light" type="button" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Normal</button>
                                        <div className="dropdown-menu" aria-labelledby="dropdown1" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                            <a className="dropdown-item waves-light waves-effect" href="#!"><span className="point-marker bg-danger" />Highest priority</a>
                                            <a className="dropdown-item waves-light waves-effect" href="#!"><span className="point-marker bg-warning" />High priority</a>
                                            <a className="dropdown-item waves-light waves-effect active" href="#!"><span className="point-marker bg-success" />Normal priority</a>
                                            <a className="dropdown-item waves-light waves-effect" href="#!"><span className="point-marker bg-info" />Low priority</a>
                                        </div>
                                        {/* end of dropdown menu */}
                                </div>
                                <div className="dropdown-secondary dropdown">
                                    <button className="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Open</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdown2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                        <a className="dropdown-item waves-light waves-effect active" href="#!">Open</a>
                                        <a className="dropdown-item waves-light waves-effect" href="#!">On hold</a>
                                        <a className="dropdown-item waves-light waves-effect" href="#!">Resolved</a>
                                        <a className="dropdown-item waves-light waves-effect" href="#!">Closed</a>
                                            <div className="dropdown-divider" />
                                                <a className="dropdown-item waves-light waves-effect" href="#!">Dublicate</a>
                                                <a className="dropdown-item waves-light waves-effect" href="#!">Invalid</a>
                                                <a className="dropdown-item waves-light waves-effect" href="#!">Wontfix</a>
                                            </div>
                                            {/* end of dropdown menu */}
                                    </div>
                                        {/* end of dropdown-secondary */}
                                    <div className="dropdown-secondary dropdown">
                                            <button className="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icofont icofont-navigation-menu" /></button>
                                        <div className="dropdown-menu" aria-labelledby="dropdown3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                            <a className="dropdown-item waves-light waves-effect" href="#!"><i className="icofont icofont-ui-alarm" /> Check in</a>
                                            <a className="dropdown-item waves-light waves-effect" href="#!"><i className="icofont icofont-attachment" /> Attach screenshot</a>
                                            <a className="dropdown-item waves-light waves-effect" href="#!"><i className="icofont icofont-spinner-alt-5" /> Reassign</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item waves-light waves-effect" href="#!"><i className="icofont icofont-ui-edit" /> Edit task</a>
                                            <a className="dropdown-item waves-light waves-effect" href="#!"><i className="icofont icofont-close-line" /> Remove</a>
                                        </div>
                                        {/* end of dropdown menu */}
                                    </div>
                                        {/* end of seconadary */}
                                </div>
                                {/* end of pull-right class */}
                            </div>
                            {/* end of card-footer */}
                        </div>
                    </div>
           
        )
    }
}
