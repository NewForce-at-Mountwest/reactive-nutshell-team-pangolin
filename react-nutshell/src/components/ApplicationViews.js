import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home"
import ChatList from "./chat/ChatList"
import Login from "./login/Login"
import Register from "./login/Register"
import EventsList from "./events/EventsList"
import TaskList from "./tasks/TaskList";
import NavBar from "./nav/NavBar";


class ApplicationViews extends Component {

	isAuthenticated = () => localStorage.getItem("userId") !== null

	render() {
		return (
			<React.Fragment>
				{/* home */}

				<Route
					path="/home"
					render={props => {
						return this.isAuthenticated() ? <Home {...props} /> : <Redirect to="/login" />
					}} />
				{/* chat home */}

				<Route
					path="/chat"
					render={props => {
						if (this.isAuthenticated()) {
							return <ChatList  {...props} />
						} else {
							return <Redirect to="/login" />
						}
					}}
				/>

				<Route
					path="/events"
					render={props => {
						return this.isAuthenticated() ? <EventsList {...props} /> : <Redirect to="/login" />
					}} />
				<Route
					path="/home"
					render={props => {
						return this.isAuthenticated() ? (
							<Home {...props} />
						) : (
								<Redirect to="/login" />
							);
					}}
				/>

				<Route
					path="/login"
					render={props => {
						return <Login {...props} />;
					}}
				/>

				<Route
					path="/logout"
					render={props => {
						return <Login {...props} />;
					}}
				/>

				<Route
					path="/register"
					render={props => {
						return <Register {...props} />;
					}}
				/>

				<Route
					path="/tasks"
					render={props => {
						return <TaskList {...props} />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
