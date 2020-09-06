export class Api {
	constructor({ url }) {
		this.url = url;
	}

	getAllBooks() {
		return fetch(`${this.url}/books`)
			.then(res => res.json());
	}
}
