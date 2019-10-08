import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
	// isLoggedIn = () => localStorage.getItem("userId") !== null

	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
					{/* <Navbar.Brand href="/home">Home</Navbar.Brand> */}
					<Link to="/home"> Home </Link>
					<Nav className="mr-auto">
						<Link to="/tasks"> Tasks </Link>
						<br></br>
						<Link to="/chat"> Chat </Link>
						<Link to="/news"> News </Link>
						<Link to="/events"> Events </Link>
						{/* <Nav.Link href="/tasks">Tasks</Nav.Link>
						<Nav.Link href="/chat">Chat</Nav.Link>
						<Nav.Link href="/news">News</Nav.Link>
						<Nav.Link href="/events">Events</Nav.Link> */}
					</Nav>

					<Form inline>
						<Link to="/login">Login</Link>
						<Link to="/logout" {...localStorage.clear("activeuser")}>
							Logout
						</Link>
					</Form>
				</Navbar>
			</>
		);
	}
}

export default NavBar;
