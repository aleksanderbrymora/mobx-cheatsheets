import { Box, Flex, IconButton } from '@chakra-ui/core';
import React, { FormEvent, useEffect, useState } from 'react';
import { useMst } from 'src/models/Root';
import { Error } from './Error';
import { SingleInput } from './SingleInput';

const WordInput = () => {
	const { words } = useMst();
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [error, setError] = useState<null | 'from' | 'to'>(null);

	const onAdd = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (from === '') setError('from');
		else if (to === '') setError('to');
		else {
			words.add({ from, to });
			setTo('');
			setFrom('');
		}
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (error) timer = showError(error);
		return () => clearTimeout(timer);
	}, [error]);

	const showError = (target: 'from' | 'to'): NodeJS.Timeout => {
		setError(target);
		return setTimeout(() => setError(null), 2000);
	};

	return (
		<Box
			mb='2rem'
			zIndex={3}
			rounded={15}
			data-testid='word-input'
			position='sticky'
			top='1rem'
			py='1rem'
		>
			{error && <Error what={error} close={() => setError(null)} />}
			<form onSubmit={onAdd}>
				<Flex alignItems='flex-end' justifyContent='space-between'>
					<SingleInput name='from' value={from} onChange={setFrom} />
					<SingleInput name='to' value={to} onChange={setTo} />
					<IconButton
						aria-label='Add new word'
						icon='add'
						size='md'
						type='submit'
					/>
				</Flex>
			</form>
		</Box>
	);
};

export default WordInput;
