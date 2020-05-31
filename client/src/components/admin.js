import React, { Component } from 'react'
import '../carownerinfo.css';
import Axios from 'axios';
import CONSTANTS from '../config';

class Admin extends Component {
    state = {
        carowner: [],
        loading: false
    }

    async componentDidMount() {
        this.setState(
            {
                loading: true
            }
        )
        let getCarowner = await Axios.get(`http://${CONSTANTS.BACKEND_PRIVATE_IP_ADDRESS}/api/carowner`)

        this.setState(
            {
                carowner: getCarowner.data,
                loading: false
            }
        )

    }

    render() {
        const itemdata = this.state.carowner.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.lostplace}</td>
                    <td>{item.status}</td>
                </tr>
            )
        })


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
                        {this.state.loading && <span className="alignCenter">data is loading !!!!!</span>}
                        {itemdata}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Admin;