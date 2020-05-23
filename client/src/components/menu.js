import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Admin Login</Link><br />
                <Link to='carowner'>Carowner Login</Link><br />
                <Link to='police'>Police Login</Link><br />
            </div>
        )
    }
}
export default Menu;