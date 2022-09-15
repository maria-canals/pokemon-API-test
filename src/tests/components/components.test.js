/** @jest-environment jsdom */

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/card';

test('render the Card component', () => {
	const pokemon = {
		name: 'bulbasaur',
		url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
		viewType: 'list',
	};
	const component = render(<Card name={pokemon.name} url={pokemon.url} />);

	expect(component.container).toHaveTextContent('Més detalls');
	expect(component.container).toHaveTextContent(pokemon.name);
});

test('clicking the button calls a function', () => {
	const mockHandler = jest.fn();

	const component = render(<Button onClick={mockHandler} />);

	const button = component.getByRole('button');
	fireEvent.click(button);

	expect(mockHandler.mock.calls).toHaveLength(1);
});
