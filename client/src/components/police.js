import React, { Component } from 'react'
import Axios from 'axios';
import CONSTANTS from '../config';
// import openSocket from 'socket.io-client';

// const socket = openSocket('http://localhost:5000', { transports: ['websocket', 'polling'] });
// socket.on('inprogress', function (data) {
//     console.log(data);
// })
class Police extends Component {

    state = {
        police: [],
        loading: false
    }



    async componentDidMount() {
        this.setState(
            {
                loading: true
            }
        )
        let getPolice = await Axios.get(`http://${CONSTANTS.BACKEND_PRIVATE_IP_ADDRESS}/api/police`)
        // console.log(getPolice);
        this.setState(
            {
                police: getPolice.data,
                loading: false
            }
        )
        console.log(this.state.police);


    }

    resolveFn = async (policedataid, victimdataid) => {

        await Axios.put(`http://localhost:5000/api/police/resolve/${policedataid}`);
        await Axios.put(`http://localhost:5000/api/carowner/resolve/${victimdataid}`);


        window.location.reload()
    }
    checkfn = (data, victim) => {
        if (data.status == "Inprogress") {
            return (
                < button type="submit" className="btn btn-primary" onClick={() => this.resolveFn(data._id, victim)}>Resolve</button>
            )
        } else {
            return "--";
        }


    }
    render() {
        setInterval(() => {
            window.location.reload()
        }, 10000);
        const itemdata = this.state.police.map((item, index) => {
            return (<tr key={index}>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{(item.carownerinfo !== undefined) ? item.carownerinfo.caronwername : ""}</td>
                <td>{(item.carownerinfo !== undefined) ? item.carownerinfo.lostplace : ""}</td>
                <td>{this.checkfn(item, item.carownerinfo.id)}</td>
            </tr >)
        })
        return (
            <div>
                {
                    !this.state.loading && <div>
                        <h1> Dashboard For Police Department</h1>
                        <table className="table adjustTable">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Victim Name</th>
                                    <th scope="col">Viction's car lost place</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemdata}
                            </tbody>
                        </table>
                    </div>
                }
                {this.state.loading && <span>Police data is loading!!!</span>}
            </div >
        )
    }
}
export default Police;