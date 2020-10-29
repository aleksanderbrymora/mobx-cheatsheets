import { Box, Divider, Flex } from '@chakra-ui/core';
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
	const { words } = useMst();

	return (
		<Box position='sticky' top='1rem' height='100%' py='1rem'>
			<Flex
				flexDir='column'
				justifyContent='space-between'
				alignItems='center'
				height='100%'
			>
				<Box>
					<TitleInput />
					<LanguageInputs />
					<Divider my='2rem' />
					<WordCount />
					<Sorting />
					<GenerateDoc />
					<pre>{JSON.stringify(words.items, null, 2)}</pre>
				</Box>

				<Box>
					<small>
						Title and language inputs currently dont do anything and can be
						ignored. They will be used later when i add the backend for more
						functionality like suggestions
					</small>
				</Box>
			</Flex>
		</Box>
	);
});

export default Side;
