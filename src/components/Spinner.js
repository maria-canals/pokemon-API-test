import React from 'react';
import { Card } from './Card';

export const Spinner = () => {
	return (
		<div className='spinner-border' role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	);
};
