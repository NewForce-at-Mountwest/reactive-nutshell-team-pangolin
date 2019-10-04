import React, { Component } from "react";
//import the components we will need
import NewsManager from "../../modules/NewsManager";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class NewsEdit extends Component {
	state = {
		title: "",
		synopsis: "",
		url: "",
		loadingStatus: false
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	componentDidMount() {
		NewsManager.get(this.props.match.params.newsId).then(newsArticle => {
			this.setState({
				title: newsArticle.title,
				synopsis: newsArticle.synopsis,
				url: newsArticle.url,
				loadingStatus: false
			});
		});
	}

	editNewsArticle = evt => {
		const currentTime = new Date();
		evt.preventDefault();
		if (
			this.state.title === "" ||
			this.state.synopsis === "" ||
			this.state.url === ""
		) {
			window.alert("Please make sure you've completed the form.");
		} else {
			this.setState({ loadingStatus: true });
			const updatedNewsArticle = {
				id: this.props.match.params.newsId,
				title: this.state.title,
				synopsis: this.state.synopsis,
				url: this.state.url,
				date: currentTime
			};

			NewsManager.update(updatedNewsArticle).then(() =>
				this.props.history.push("/news")
			);
		}
	};

	render() {
		return (
			<>
				<Form>
					<Form.Group controlId="title">
						<Form.Control
							type="text"
							required
							onChange={this.handleFieldChange}
							placeholder="Title"
							value={this.state.title}
						/>
					</Form.Group>
					<Form.Group controlId="synopsis">
						<Form.Control
							type="text"
							required
							onChange={this.handleFieldChange}
							placeholder="Synopsis"
							value={this.state.synopsis}
						/>
					</Form.Group>
					<Form.Group controlId="url">
						<Form.Control
							type="url"
							required
							onChange={this.handleFieldChange}
							placeholder="URL"
							value={this.state.url}
						/>
					</Form.Group>

					<Button
						variant="primary"
						type="submit"
						disabled={this.state.loadingStatus}
						onClick={this.editNewsArticle}
					>
						Update Article
					</Button>
				</Form>
			</>
		);
	}
}

export default NewsEdit;
