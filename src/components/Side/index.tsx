import { Box } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'src/models/Root';
import GenerateDoc from './GenerateDoc';
import LanguageInputs from './LanguageInputs';
import Sorting from './Sorting';
import TitleInput from './TitleInput';
import WordCount from './WordCount';

const Side = observer(() => {
	/*
	 * [x] title input
	 * [x] how many words
	 * [ ] language inputs
	 * [ ] sorting options
	 * [ ] button to generate a doc
	 */
	const { sheet } = useMst();

	return (
		<Box position='sticky' top='1rem'>
			<TitleInput />
			<WordCount />
			<LanguageInputs />
			<Sorting />
			<GenerateDoc />
			<pre>{JSON.stringify(sheet, null, 2)}</pre>
		</Box>
	);
});

export default Side;
