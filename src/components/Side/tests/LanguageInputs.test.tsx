import { render, screen } from '@testing-library/react';
import React from 'react';
import LanguageInputs from '../LanguageInputs';

it('renders two groups of a label and an input for language inputs', () => {
	render(<LanguageInputs />);
	localStorage.clear();

	const inputs = screen.getAllByLabelText(/from|to/i) as HTMLInputElement[];
	expect(inputs).toHaveLength(2);
});

// inputs.forEach((i) => (i.value = 'stuff'));
// const {
// 	sheet: { fromLang, toLang },
// } = rootStore;

// expect(fromLang).toBe('stuff');
// expect(toLang).toBe('stuff');
