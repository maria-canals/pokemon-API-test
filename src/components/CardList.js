import React from 'react';
import { Card } from './Card';

export const CardList = ({ data, viewType }) => {
	return (
		<>
			<div className={viewType == 'list' ? 'list-container' : 'grid-container'}>
				{data?.map(pokemon => (
					<Card
						id={pokemon.id}
						viewType={viewType}
						key={pokemon.name}
						name={pokemon.name}
						url={pokemon.sprites.front_default}
					/>
				))}
			</div>
		</>
	);
};
