import React, { useState } from 'react';

import { Button } from './Button';

export const Card = ({ name, url, viewType }) => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div
			className={viewType == 'list' ? 'card card-list m-2' : 'card'}
			key={name}>
			<div className='card-title'>
				<h3>{name}</h3>
			</div>
			<Button
				children='Més detalls'
				onClick={() => setShowDetails(!showDetails)}
			/>
			<div className={showDetails ? 'card-details' : 'd-none'}>
				<img className='card-img-top' src={url} alt={name} />
			</div>
		</div>
	);
};
