import { Box, Flex, Input, Stack } from '@chakra-ui/core';
import React from 'react';
import { useMst } from 'src/models/Root';
import { capitalise } from 'src/utils/capitalise';

const LanguageInputs = () => {
	const {
		sheet: { changeFromLanuage, changeToLanuage, fromLang, toLang },
	} = useMst();
	return (
		<Stack spacing={3} isInline my='1rem' justifyContent='space-between'>
			<LanguageInput
				name='from'
				onChange={changeFromLanuage}
				value={fromLang}
			/>
			<LanguageInput name='to' onChange={changeToLanuage} value={toLang} />
		</Stack>
	);
};

interface LanguageProps {
	name: 'from' | 'to';
	onChange: (to: string) => void;
	value: string;
}

const LanguageInput: React.FC<LanguageProps> = ({ name, onChange, value }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<Box>
			<label htmlFor={`language-input-${name}`}>{capitalise(name)}</label>
			<Input
				width='90%'
				data-testid='language-input'
				onChange={handleChange}
				value={value}
				placeholder={capitalise(name)}
				id={`language-input-${name}`}
			/>
		</Box>
	);
};

export default LanguageInputs;
