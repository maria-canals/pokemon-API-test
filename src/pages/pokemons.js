import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { CardList } from '../components/CardList';
import { Navigation } from '../components/Navigation';
import { Spinner } from '../components/Spinner';

import { fetchPokemon } from '../services/fetchPokemon';

export const Pokemons = () => {
	let [pokemonsList, setPokemonsList] = useState([]);
	let [viewType, setViewType] = useState('list');
	let [offset, setOffset] = useState(1);

	let limit = 11;

	const fetchPokemons = async (offset, limit) => {
		const pokemons = [];
		for (let i = offset; i <= offset + limit; i++) {
			await fetchPokemon(i).then(pokemon => {
				pokemons.push(pokemon);
			});
		}

		setPokemonsList(pokemons);
	};

	const handlePrevious = () => {
		if (offset != 1) {
			setOffset((offset -= 12));
			fetchPokemons(offset, limit);
		}
	};

	const handleNext = () => {
		setOffset((offset += 12));
		fetchPokemons(offset, limit);
	};

	useEffect(() => {
		fetchPokemons(offset, limit);
	}, []);

	return (
		<>
			{pokemonsList.length > 0 ? (
				<div className='pokemons-screen'>
					<h1 className='title'> Pokémons</h1>

					<Button children='Llistat' onClick={() => setViewType('list')} />
					<Button children='Graella' onClick={() => setViewType('grid')} />

					<CardList data={pokemonsList} viewType={viewType} />

					<Navigation
						onClick={n => (n == 2 ? handleNext() : handlePrevious())}
					/>
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};
