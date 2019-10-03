import React, { Component } from 'react';
import UserManager from '../../Modules/UserManager'
// import EmployeeManager from '../../modules/EmployeeManager';
// import LocationManager from '../../modules/LocationManager';
//import './AnimalForm.css'

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewUser = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.password === "") {
            window.alert("Please input name, email, and create a password");
        } else {
            this.setState({ loadingStatus: true });
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            };
            UserManager.postNewUser(newUser)
            .then(this.props.history.push("/home"));

        }
    };




    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        //id must exactly match variable in state
                        id="name"
                        placeholder="User Name"
                        />
                        <label htmlFor="name">Name</label>
                        <br></br>

                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}

                        id="email"
                        placeholder="User Email"
                        />
                        <label htmlFor="name">Name</label>
                        <br></br>

                        <input
                        type="password"
                        required
                        onChange={this.handleFieldChange}

                        id="password"
                        placeholder="User Password"
                        />
                        <label htmlFor="password">Password</label>
                        <br></br>




                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewUser}

                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default Register