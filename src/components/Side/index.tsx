import { Box, Divider, Flex } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import GenerateDoc from './GenerateDoc';
import ImportFromTxt from './ImportFromTxt';
import LanguageInputs from './LanguageInputs';
import Sorting from './Sorting';
import TitleInput from './TitleInput';
import Transformations from './Transformations';
import WordCount from './WordCount';

const Side = observer(() => {
	/*
	 * [x] title input
	 * [x] how many words
	 * [ ] language inputs
	 * [ ] sorting options
	 * [ ] button to generate a doc
	 */

	return (
		<Box position='sticky' top='1rem' maxH='90vh' py='1rem'>
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
					<Transformations />
					<ImportFromTxt />
					<GenerateDoc />
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
