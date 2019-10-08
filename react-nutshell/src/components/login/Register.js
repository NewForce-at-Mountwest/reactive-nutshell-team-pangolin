import React, { Component } from 'react';
import UserManager from '../../modules/UserManager'


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



    // componentDidMount() {
    //     //getAll from UserManager and hang on to that data; put it in state
    //     UserManager.getAll()
    //         .then((usersFromDatabase) => {
    //             console.log(usersFromDatabase)
    //             this.setState({
    //                 users: usersFromDatabase
    //                 })
    //                 console.log(this.state.users)
    //         });
    //         const hasMatch = false
    //         for (var index = 0; index < json.length; ++index) {

    //             const name = json[i]

    //             if (name === this.state.name) {
    //                 hasMatch = true;
    //                 window.alert("User already registered, please use another User Name")
    //             }
    //         }
    // }



    constructNewUser = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.password === "") {
            window.alert("Please input name, email, and create a password");

        } else {
            UserManager.getOne(this.state.name).then(userBack => {

                if (userBack[0]) {
                    window.alert("User already registered, please use another User Name")
                }
                else {
                    this.setState({ loadingStatus: true });
                    const newUser = {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password
                    }


                    console.log(newUser)
                    UserManager.postNewUser(newUser)
                        .then((newUserObject) => {
                            localStorage.setItem("userId", newUserObject.id)
                        }
                        )
                        .then(() => this.props.history.push("/home"));
                }
            })
        }
    };





    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <h1>Welcome to Nutshell!!</h1>
                            <h2>Better than Facebook!!</h2>
                            <br></br>
                            <br></br>
                            <h3>Please enter in a username, email address and personal password to register for access.</h3>
                            <br></br>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="name"
                                placeholder="User Name"
                            />
                            <label htmlFor="name">User Name</label>
                            <br></br>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}

                                id="email"
                                placeholder="User Email"
                            />
                            <label htmlFor="name">Email Address</label>
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