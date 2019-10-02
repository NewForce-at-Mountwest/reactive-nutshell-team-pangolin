import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home"

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
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
