import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Nutshell.css";

import ApplicationViews from "./ApplicationViews";



class Nutshell extends Component {
	render() {
		return (
			<>
				<NavBar />
				<ApplicationViews />
			</>
		);
	}
}

export default Nutshell;
