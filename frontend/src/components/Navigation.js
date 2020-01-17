import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/projects">ir a projects</Link>
            </div>
        )
    }
}
