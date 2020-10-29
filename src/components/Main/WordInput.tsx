import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	CloseButton,
	Flex,
	IconButton,
	Input,
} from '@chakra-ui/core';
import React, { FormEvent, useEffect, useState } from 'react';
import { useMst } from 'src/models/Root';
import { capitalise } from 'src/utils/capitalise';

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

const Error: React.FC<{
	what: string;
	close: () => void;
}> = ({ what, close }) => {
	return (
		<Alert status='error' my='1rem' data-testid='warning-input-empty'>
			<AlertIcon />
			<AlertTitle mr={2}>Input can't be empty!</AlertTitle>
			<AlertDescription>
				You left "{capitalise(what)}" field empty. Make sure you fill it in.
			</AlertDescription>
			<CloseButton position='absolute' right='8px' top='8px' onClick={close} />
		</Alert>
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
