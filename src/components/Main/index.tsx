import { Box } from '@chakra-ui/core';
import React from 'react';
import WordInput from './WordInput';
import WordList from './List';

const Main = () => {
	/*
	 * [ ] - Word pair input
	 * [ ] - Word list
	 *   [ ] - Both words
	 *   [ ] - Edit button
	 *   [ ] - Delete button
	 */
	return (
		<Box data-testid='main' pr='2rem'>
			<WordInput />
			<WordList />
		</Box>
	);
};

export default Main;
