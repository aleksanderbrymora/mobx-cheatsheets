import { Box, Button, Flex, IconButton, Input } from '@chakra-ui/core';
import React, { useState } from 'react';
import { useMst } from 'src/models/Root';
import { capitalise } from 'src/utils/capitalise';

const WordInput = () => {
	const { words } = useMst();
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');

	return (
		<Flex
			data-testid='word-input'
			h='10vh'
			position='sticky'
			top='1rem'
			alignItems='center'
			justifyContent='space-between'
			rounded='15px'
			mb='2rem'
			zIndex={3}
		>
			<SingleInput name='from' value={from} onChange={setFrom} />
			<SingleInput name='to' value={to} onChange={setTo} />
			<IconButton aria-label='Add new word' icon='add' size='lg' />
		</Flex>
	);
};

interface Props {
	name: 'from' | 'to';
	value: string;
	onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SingleInput: React.FC<Props> = ({ name, value, onChange }) => {
	return (
		<Box w='100%' mr='1rem'>
			<label htmlFor={`word-input-${name}`}>
				{name === 'from' ? 'Definition' : 'Translation'}
			</label>
			<Input
				id={`word-input-${name}`}
				placeholder={capitalise(name)}
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					onChange(e.target.value)
				}
			/>
		</Box>
	);
};

export default WordInput;
