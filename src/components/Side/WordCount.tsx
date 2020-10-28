import { Box, Heading } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'src/models/Root';
import { pluralise } from 'src/utils/pluralise';

const WordCount = observer(() => {
	const {
		words: { totalItems },
	} = useMst();
	return (
		<Box>
			<Heading data-testid='word-count' as='h2' size='sm'>
				{totalItems === 0
					? 'Add some words!'
					: `You have ${totalItems} ${pluralise('word', totalItems)}`}
			</Heading>
		</Box>
	);
});

export default WordCount;
