import { Box, Flex, Heading, IconButton } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import { Instance } from 'mobx-state-tree';
import React from 'react';
import { useMst } from 'src/models/Root';
import { Word } from 'src/models/Words';

const WordList = observer(() => {
	const { words } = useMst();

	return (
		<Box>
			{words.items.map((item, i) => (
				<WordRow key={item.from + item.to + i} item={item} />
			))}
		</Box>
	);
});

interface Props {
	item: Instance<typeof Word>;
}

const WordRow: React.FC<Props> = ({ item }) => {
	const { from, to } = item;
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
				<IconButton
					aria-label='delete this word'
					icon='delete'
					onClick={item.remove}
				/>
			</Flex>
		</Flex>
	);
};

export default WordList;
