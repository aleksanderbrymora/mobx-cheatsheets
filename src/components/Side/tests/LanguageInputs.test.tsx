import React from 'react';
import { render, screen } from '@testing-library/react';
import LanguageInputs from '../LanguageInputs';

it('renders a label and an input', () => {
	render(<LanguageInputs />);
	localStorage.clear();

	const inputs = screen;
});
