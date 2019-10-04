import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import NewsList from "./news/NewsList";
import NewsCreate from "./news/NewsCreate";
import NewsEdit from "./news/NewsEdit";

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
				<Route
					exact
					path="/news"
					render={props => {
						return <NewsList {...props} />;
					}}
				/>
				<Route
					path="/news/create"
					render={props => {
						return <NewsCreate {...props} />;
					}}
				/>
				<Route
					path="/news/:newsId(\d+)/edit"
					render={props => {
						return <NewsEdit {...props} />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
