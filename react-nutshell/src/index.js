import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nutshell from "./components/Nutshell";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<Router>
		<Nutshell />
	</Router>,
	document.getElementById("root")
);
