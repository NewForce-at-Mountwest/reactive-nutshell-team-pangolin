import React, { Component } from "react";
//import the components we will need
import NewsCard from "./NewsCard";
import NewsManager from "../../modules/NewsManager";
import Button from "react-bootstrap/Button";

class NewsList extends Component {
	//define what this component needs to render
	state = {
		newsId: "",
		news: [],
		loadingStatus: true
	};

	componentDidMount() {
		NewsManager.getAll().then(newsArticles => {
			newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
			this.setState({
				news: newsArticles
			});
		});
	}

	deleteNewsArticle = id => {
		NewsManager.delete(id).then(() => {
			NewsManager.getAll().then(newsArticles => {
				newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
				this.setState({
					news: newsArticles
				});
			});
		});
	};

	render() {
		return (
			<>
				<section className="section-content">
					<Button
						type="button"
						onClick={() => {
							this.props.history.push("/news/create");
						}}
					>
						New Article
					</Button>
				</section>
				<div className="container-cards">
					{this.state.news.map(singleNewsArticle => (
						<NewsCard
							deleteNewsArticleProp={this.deleteNewsArticle}
							key={singleNewsArticle.id}
							newsProp={singleNewsArticle}
							{...this.props}
						/>
					))}
				</div>
			</>
		);
	}
}

export default NewsList;
