import React, { Component } from 'react'
import '../carownerinfo.css';

class Carownerinfo extends Component {

    render() {
        console.log(this.props.mobile);
        const { name, description, lostplace, status } = this.props.mobile
        return (
            <div>
                <table className="table adjustTable">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">LostPlace</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{description}</td>
                            <td>{lostplace}</td>
                            <td>{status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Carownerinfo;