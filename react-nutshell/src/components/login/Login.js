import React, { Component } from "react";
import UserManager from "../../modules/UserManager";


class Login extends Component {
  // Set initial state
  state = {
    name: "",
    password: ""
  };


  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };



  handleLogin = (e) => {
    e.preventDefault();
    const userName = this.state.name
    const passwordField = this.state.password
    UserManager.getOne(userName).then(user => {
      console.log(userName)
      {
        if (passwordField === "") { alert("Please enter password") }

        else if (user[0].password === this.state.password) {
          localStorage.setItem("userId", user[0].id)
        }

        else { (alert("Incorrect password")) }
      }

      this.props.history.push("/home")
    });
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
          <h1>Welcome to Nutshell!!</h1>
          <h2>Better than Facebook!!</h2>
          <br></br>
          <h3>Please sign in</h3>
          <br></br>
          <div className="formgrid">
            <p><input
              onChange={this.handleFieldChange}
              type="text"
              id="name"
              placeholder="Username"
              required=""
              autoFocus=""
            />
              <label htmlFor="inputUserName">Username</label></p>


            <p><input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
              <label htmlFor="inputPassword">Password</label></p>
          </div>
          <button type="submit">Sign in</button>
          <br></br>

          <div className="registerButton">
            <br></br>
            <br></br>
            <h3>Or register a new account.</h3>
            <br></br>
            <button
              type="button"
              onClick={() => this.props.history.push("/register")}>Register</button>

          </div>
        </fieldset>
      </form>
    );
  }
}

export default Login;