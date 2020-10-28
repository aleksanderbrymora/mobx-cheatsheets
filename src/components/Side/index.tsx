import { Box } from '@chakra-ui/core';
import React from 'react';
import GenerateDoc from './GenerateDoc';
import LanguageInputs from './LanguageInputs';
import Sorting from './Sorting';
import TitleInput from './TitleInput';
import WordCount from './WordCount';

const Side = () => {
	/*
	 * title input
	 * how many words
	 * language inputs
	 * sorting options
	 * button to generate a doc
	 */
	return (
		<Box position='sticky' top='1rem'>
			<TitleInput />
			<WordCount />
			<LanguageInputs />
			<Sorting />
			<GenerateDoc />
		</Box>
	);
};

export default Side;
