import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
// import "./NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/home">Home</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/tasks">Tasks</Nav.Link>
						<Nav.Link href="/chat">Chat</Nav.Link>
						<Nav.Link href="/news">News</Nav.Link>
						<Nav.Link href="/events">Events</Nav.Link>
					</Nav>
					<Form inline >
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/logout">Logout</Nav.Link>
					</Form>
				</Navbar>
			</>
		);
	}
}

export default NavBar;
