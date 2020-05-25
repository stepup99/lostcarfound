import React, { Component } from 'react'
import '../carowner.css';
import Axios from 'axios';
import Carownerinfo from './carownerinfo';
import Filefirform from './filefirform';
class Carowner extends Component {
    state = {
        mobile: "",
        renderInfoStatus: false,
        loading: false,
        carownerProp: "",
        fileFir: false
    }
    changeFn = (e) => {
        this.setState({ mobile: e.target.value });
    }

    fileFirFn = () => {
        this.setState({
            fileFir: !this.state.fileFir
        })
    }

    submitFN = async (evn) => {
        const mobile = this.state.mobile;
        evn.preventDefault();
        if (mobile !== "" && mobile.length == 10) {
            this.setState({
                loading: true
            });
            const getData = await Axios.get(`http://localhost:5000/api/carowner/${mobile}`);
            let carownerinfo = getData.data[0]
            this.setState({
                carownerProp: carownerinfo
            })
            if (isEmpty(carownerinfo) > 0) {

                this.setState({
                    loading: false,
                    renderInfoStatus: true
                })
            } else {

                this.setState({
                    renderInfoStatus: false
                });
            }
        } else {
            alert("please enter the 10 digit mobile no.");
        }



        function isEmpty(obj) {
            return Object.keys(obj).length;
        }

    }



    render() {
        let mybutton = null;
        mybutton = this.state.renderInfoStatus ? <Carownerinfo mobile={this.state.carownerProp} /> : "";
        return (
            <div>
                <form className="formElm" onSubmit={(e) => this.submitFN(e)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1"><strong>Mobile Number to Retrive Status</strong></label>
                        <hr />
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="mobileHelp" placeholder="Enter Mobile No." onChange={(e) => { this.changeFn(e) }} />
                    </div>

                    <button type="submit" className="btn btn-primary">Get Status</button>
                </form>
                {mybutton}
                <button className="btn btn-primary adjust-left" onClick={() => { this.fileFirFn() }}>File An Fir</button>
                <br />
                {this.state.loading && <span>Loading...</span>}

                {this.state.fileFir && <Filefirform />}
            </div>
        )
    }
}

export default Carowner;