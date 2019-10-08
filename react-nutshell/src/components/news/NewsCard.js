import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Microlink from "@micr
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class NewsCard extends Component {
	render() {
		return (
			<Card style={{ width: "55rem" }}>
				<Card.Body>
					<Card.Title>{this.props.newsProp.title}</Card.Title>
					<Card.Text>{this.props.newsProp.synopsis}</Card.Text>
					<Microlink url={this.props.newsProp.url} />
					<br />
					<br />
					<ButtonGroup aria-label="Basic example">
						<Button
							type="button"
							onClick={() => {
								this.props.history.push(`/news/${this.props.newsProp.id}/edit`);
							}}
							variant="secondary"
						>
							Edit
						</Button>
						<Button
							type="button"
							onClick={() => {
								this.props.deleteNewsArticleProp(this.props.newsProp.id);
							}}
							variant="secondary"
						>
							Delete
						</Button>
					</ButtonGroup>
				</Card.Body>
			</Card>
		);
	}
}

export default NewsCard;
