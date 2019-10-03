import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home"
import ChatList from "./chat/ChatList"

class ApplicationViews extends Component {
	render() {
		return (
			<React.Fragment>
				{/* home */}
				<Route
					path="/home"
					render={props => {
						return <Home />;
					}}
				/>
				{/* chat home */}
				<Route
					path="/chat"
					render={props => {
						return <ChatList />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
