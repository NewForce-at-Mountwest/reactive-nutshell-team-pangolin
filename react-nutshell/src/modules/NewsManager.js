const remoteURL = "http://localhost:5002";

export default {
	get(id) {
		return fetch(`${remoteURL}/news/${id}`).then(result => result.json());
	},
	getAll(userId) {
		return fetch(`${remoteURL}/news?userId=${userId}`).then(result =>
			result.json()
		);
	},
	getAllSortByDate() {
		return fetch(`${remoteURL}/news`).then(result => result.json());
	},
	delete(id) {
		return fetch(`${remoteURL}/news/${id}`, {
			method: "DELETE"
		}).then(result => result.json());
	},
	post(newsArticle) {
		return fetch(`${remoteURL}/news`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newsArticle)
		}).then(data => data.json());
	},
	update(editedNewsArticle) {
		return fetch(`${remoteURL}/news/${editedNewsArticle.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editedNewsArticle)
		}).then(data => data.json());
	}
};
