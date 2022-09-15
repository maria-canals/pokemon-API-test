import React from 'react';

export const Card = ({ name, url, viewType }) => {
	return (
		<div
			className={viewType == 'list' ? 'card card-list m-2' : 'card'}
			key={name}>
			{/* <img className='card-img-top' src={url} alt={name} /> */}
			<div className='card-title'>
				<h3>{name}</h3>
			</div>
		</div>
	);
};
