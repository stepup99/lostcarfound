import React, { Component } from 'react'
import '../carowner.css';
class Carowner extends Component {
    render() {
        return (
            <div>
                <h1>carowner dashboard</h1>
                <span>List of Reports By :Rupesh Chandra</span>
                <table className="centerElm">
                    <tr>
                        <th>Description</th>
                        <th>Lost Place</th>
                        <th>Report Status</th>
                    </tr>
                    <tr>
                        <td>lajpathnagar</td>
                        <td>my car was not there when i was coming from my office to home.</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>connaught place</td>
                        <td>I was went for shopping. and my car was disappeared.</td>
                        <td>Pending</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Carowner;