import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home"

class ApplicationViews extends Component {
	render() {
		return (
			<React.Fragment>
				<Route
					path="/"
					render={props => {
						return <Home />;
					}}
				/>
				<Route exact path="/users/:userId(\d+)" render={(props) => {
					// Pass the userId to the XXX???XXX Component
					return  <Home {...props} userId={parseInt(props.match.params.userId)} />  //<Redirect to="/login" />
				}} />



				{/* <Route path="/login" component={Login} /> */}
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
