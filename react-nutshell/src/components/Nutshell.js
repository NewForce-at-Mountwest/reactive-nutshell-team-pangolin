import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-roboto";

import ApplicationViews from "./ApplicationViews";

// import "./Nutshell.css";

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
