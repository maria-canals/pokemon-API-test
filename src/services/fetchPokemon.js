const axios = require('axios');

export const fetchPokemon = async id =>
	await axios
		.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(response => {
			return response.data;
		})
		.catch(err => {
			console.log(err);
		});
