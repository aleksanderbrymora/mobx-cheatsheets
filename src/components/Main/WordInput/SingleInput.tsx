import { Box, Input } from '@chakra-ui/core';
import React from 'react';
import { capitalise } from 'src/utils/capitalise';

interface Props {
	name: 'from' | 'to';
	value: string;
	onChange: React.Dispatch<React.SetStateAction<string>>;
	inputRef?: React.RefObject<HTMLInputElement>;
}

export const SingleInput: React.FC<Props> = ({
	name,
	value,
	onChange,
	inputRef,
}) => {
	return (
		<Box w='100%' mr='1rem'>
			<label htmlFor={`word-input-${name}`}>
				{name === 'from' ? 'Definition' : 'Translation'}
			</label>
			<Input
				ref={inputRef}
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
