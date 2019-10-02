import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<header>
				<h1 className="site-title">
					Nutshell
					<br />
					<small>Not Facebook</small>
				</h1>
				<nav>
					<ul className="container">
						<li>
							<Link className="nav-link" to="/home">
								Home
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/tasks">
								Tasks
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/chat">
								Chat
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/news">
								News
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/events">
								Events
							</Link>
						</li>
                        <li>
							<Link className="nav-link" to="/friends">
								Friends
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default NavBar;