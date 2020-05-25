import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">LostNfound</a>
                    <button className="navbar-toggler" type="button" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='police'>Police</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='carowner'>Carowner</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Menu;