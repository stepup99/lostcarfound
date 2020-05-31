import React, { Component } from 'react'
import '../carownerinfo.css';
import Axios from 'axios';

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
        let getCarowner = await Axios.get('http://127.0.0.1:5000/api/carowner')
        console.log(getCarowner);
        this.setState(
            {
                carowner: getCarowner.data,
                loading: false
            }
        )
        console.log(this.state.carowner);


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