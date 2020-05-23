import React, { Component, Fragment } from 'react'

class Admin extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <h1>Welcome to Admin page</h1>
                    <span>See both carwoners and police list !!!</span>
                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <button type="submit">Login</button>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Admin;
