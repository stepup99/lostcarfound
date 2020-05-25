import React, { Component } from 'react'
import Axios from 'axios';

class Filefirform extends Component {


    state = {
        mobile: '',
        name: '',
        description: '',
        lostplace: '',
        loadingFir: false
    }
    changeFn = (e) => {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });

    }
    submitFN = async (e) => {
        e.preventDefault();
        if (this.state.mobile.length === 10 && this.state.mobile !== "" && this.state.description !== "" && this.state.lostplace !== "" && this.state.name !== "") {
            let datainfo = {};
            datainfo.mobile = this.state.mobile;
            datainfo.description = this.state.description;
            datainfo.lostplace = this.state.lostplace;
            datainfo.name = this.state.name;
            const postData = await Axios.post(`http://localhost:5000/api/carowner`, datainfo);
            console.log(postData);
            if (postData.status == 200) {
                console.log("i m inside");
                this.setState({
                    loadingFir: true
                });
            }
        } else {
            alert("insufficient data");
        }
    }

    render() {
        let allstatus = null;
        allstatus = this.state.loadingFir ? <span> Yay! form submitted succesfully!!!!!! </span> : "";
        return (
            <div>
                <hr />
                {!this.state.loadingFir && <form className="formElm" onSubmit={(e) => this.submitFN(e)}>
                    <div className="form-group">
                        <input type="number" className="form-control" name="mobile" id="exampleInputEmail1" aria-describedby="mobileHelp" placeholder="Enter Mobile No." onChange={(e) => { this.changeFn(e) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" id="exampleInputName" aria-describedby="textHelp" placeholder="Enter Name" onChange={(e) => { this.changeFn(e) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="description" id="exampleInputDescription" aria-describedby="textHelp" placeholder="Enter description" onChange={(e) => { this.changeFn(e) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="lostplace" id="exampleInputName" aria-describedby="textHelp" placeholder="Enter lostplace" onChange={(e) => { this.changeFn(e) }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>}
                {allstatus}
            </div >
        )
    }
}
export default Filefirform;