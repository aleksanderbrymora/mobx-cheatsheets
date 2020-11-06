import { render, screen } from '@testing-library/react';
import React from 'react';
import { rootStore } from 'src/models/Root';
import WordCount from '../WordCount';

it('renders a heading indicating how many words have been added', () => {
	render(<WordCount />);
	const { words } = rootStore;
	// blank canvas
	localStorage.clear();
	words.removeAll();

	const counter = screen.getByTestId('word-count');
	expect(counter.innerHTML).toBe('Add some words!');
	words.add({ from: 'paczka', to: 'box' });
	expect(counter.innerHTML).toBe('You have 1 word');
	words.add({ from: 'paczka', to: 'box' });
	expect(counter.innerHTML).toBe('You have 2 words');
	// expect(inputElement).toBeInTheDocument();
	// expect(inputElement.value).toBe('');
	// inputElement.value = 'Title';
	// expect(inputElement.value).toBe('Title');
});
