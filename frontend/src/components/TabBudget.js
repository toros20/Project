import React, { Component } from 'react'
import axios from 'axios'
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

    render() {
        return (
             <div> 
                 <div class="page-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h5><a href="#">{this.props.nombre}</a></h5>
                                    <span>{this.props.description}</span>
                                    <div class="card-header-right">
                                        <i class="icofont icofont-rounded-down"></i>
                                        <i class="icofont icofont-refresh"></i>
                                        <i class="icofont icofont-close-circled"></i>
                                    </div>
                                </div>
                                <div class="card-block">
                                    <div class="row">
                                        
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
