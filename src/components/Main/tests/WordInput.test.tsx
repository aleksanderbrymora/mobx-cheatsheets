import React from 'react';
import { render, screen } from '@testing-library/react';
import WordInput from '../WordInput';
it('renders the component', () => {
	render(<WordInput />);
	const el = screen.getByTestId('word-input');
	expect(el).toBeInTheDocument();
});
