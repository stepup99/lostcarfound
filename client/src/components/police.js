import React, { Component } from 'react'
import Axios from 'axios';

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
        let getPolice = await Axios.get('http://localhost:5000/api/police')
        // console.log(getPolice);
        this.setState(
            {
                police: getPolice.data,
                loading: false
            }
        )
        console.log(this.state.police);


    }

    resolveFn = async (data) => {

        const updateStatus = await Axios.put(`http://localhost:5000/api/police/resolve/${data}`);

        window.location.reload()
    }
    checkfn = (data) => {
        if (data.status == "Inprogress") {
            return (
                < button type="submit" className="btn btn-primary" onClick={() => this.resolveFn(data._id)}>Resolve</button>
            )
        } else {
            return "--";
        }


    }
    render() {
        const itemdata = this.state.police.map((item, index) => {
            return (<tr key={index}>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{(item.carownerinfo !== undefined) ? item.carownerinfo.caronwername : ""}</td>
                <td>{(item.carownerinfo !== undefined) ? item.carownerinfo.lostplace : ""}</td>
                <td>{this.checkfn(item)}</td>
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