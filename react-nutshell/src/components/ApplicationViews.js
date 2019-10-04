import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import Home from "./home/Home"
import Login from "./login/Login"
import Register from "./login/Register"
import NavBar from "./nav/NavBar"



class ApplicationViews extends Component {

	isAuthenticated = () => localStorage.getItem("userId") !== null

	render() {
		return (
			<React.Fragment>
				<Route
					path="/home"
					render={props => {
						return this.isAuthenticated() ? <Home {...props} /> : <Redirect to="/login" />
						}}/>

				<Route
					path="/login"
					render={(props) => {
						return <Login {...props} />
						}} />

				<Route path="/logout"
					render={(props) => {
						return <Login {...props} />
						}} />

				<Route path="/register"
					render = {(props) => {
						return <Register {...props} />
						}}/>

			</React.Fragment>
		);
	}
}

export default ApplicationViews;
