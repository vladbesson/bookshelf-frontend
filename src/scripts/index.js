import { Api } from './Api';

import '../sass/index.scss';

console.log("Hello there!");

const api = new Api({ url: 'http://localhost:3000' });
api.getAllBooks()
	.then(function(data) {
		console.log(data.data);
	})
	.catch(console.log);
