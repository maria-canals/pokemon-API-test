import React from 'react';

export const Navigation = ({ onClick }) => {
	return (
		<nav id='navigation'>
			<ul className='pagination d-flex justify-content-center'>
				<li className='page-item m-2' onClick={() => onClick(1)}>
					<a className='page-link' href='#'>
						Anterior
					</a>
				</li>

				<li className='page-item m-2' onClick={() => onClick(2)}>
					<a className='page-link' href='#'>
						Següent
					</a>
				</li>
			</ul>
		</nav>
	);
};
