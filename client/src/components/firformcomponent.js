import React, { Component } from 'react'

export default class firformcomponent extends Component {
    render() {
        return (
            <div>
                <form className="formElm" onSubmit={(e) => this.submitFN(e)}>
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

                </form>
            </div>
        )
    }
}
