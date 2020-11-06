import React from 'react';
import { render, screen } from '@testing-library/react';
import TitleInput from '../TitleInput';

it('renders a label and an input', () => {
	render(<TitleInput />);
	localStorage.clear();
	const inputElement = screen.getByLabelText('Title') as HTMLInputElement;
	expect(inputElement).toBeInTheDocument();
	expect(inputElement.value).toBe('');
	inputElement.value = 'Title';
	expect(inputElement.value).toBe('Title');
});
