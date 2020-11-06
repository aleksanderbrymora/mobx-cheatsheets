import { Box } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'src/models/Root';
import { WordRow } from './WordRow';

const WordList = observer(() => {
	const { words } = useMst();

	return (
		<Box>
			{words.sortedWords.map((item, i) => (
				<WordRow key={item.id + i} item={item} />
			))}
		</Box>
	);
});

export default WordList;
