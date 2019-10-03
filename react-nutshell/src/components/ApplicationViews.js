import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home"
import Login from "./login/Login"
import Register from "./login/Register"
// import NavBar from "./nav/NavBar"
// import Logout from "./login/Logout"

class ApplicationViews extends Component {
	render() {
		return (
			<React.Fragment>
				<Route
					path="/home"
					render={props => {
						return <Home />;
					}}
				/>
				{/* <Route exact path="/users/:userId(\d+)" render={(props) => {
					// Pass the userId to the XXX???XXX Component
					return  <Login {...props} userId={parseInt(props.match.params.userId)} />  //<Redirect to="/login" />
				}} /> */}



				<Route path="/login" component={Login} />
				<Route path="/logout" component={Login} />
				
				<Route path="/register" render = {(props) => {
					return <Register {...props} />}}/>

			</React.Fragment>
		);
	}
}

export default ApplicationViews;
