import { Box, Flex, Heading, IconButton } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'src/models/Root';

const WordList = observer(() => {
	const { words } = useMst();

	return (
		<Box>
			{words.items.map((i) => (
				<WordRow {...i} />
			))}
		</Box>
	);
});

interface Props {
	from: string;
	to: string;
}

const WordRow: React.FC<Props> = ({ from, to }) => {
	return (
		<Flex
			bg='gray.900'
			alignItems='center'
			justifyContent='space-between'
			w='100%'
			p='1rem'
			my='1rem'
		>
			<Flex w='100%' justifyContent='space-around' alignItems='cente'>
				<Heading as='h2' size='md'>
					{from} - {to}
				</Heading>
			</Flex>
			<Flex ml='2rem'>
				<IconButton aria-label='edit this word' icon='edit' mr='1rem' />
				<IconButton aria-label='delete this word' icon='delete' />
			</Flex>
		</Flex>
	);
};

export default WordList;
