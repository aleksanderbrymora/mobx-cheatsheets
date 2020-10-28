import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '.';

it('renders main', () => {
	render(<Main />);
	const linkElement = screen.getByText(/side/i);
	expect(linkElement).toBeInTheDocument();
});
