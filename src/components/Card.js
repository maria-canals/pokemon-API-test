import React, { useState } from 'react';

import { Button } from './Button';
import Modal from 'react-modal';

export const Card = ({ name, url, viewType, id }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div
			className={viewType == 'list' ? 'card card-list m-2' : 'card'}
			key={name}>
			<div className='card-title'>
				<h1>#{id}</h1>
			</div>

			<Modal
				ariaHideApp={false}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}>
				<Button onClick={closeModal} children='Tancar' />
				<h1>{name}</h1>
				<img className='card-img-top' src={url} alt={name} />
			</Modal>

			<Button children='Més detalls' onClick={() => openModal()} />
		</div>
	);
};
