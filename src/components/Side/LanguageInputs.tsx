import { Box, Flex, Input } from '@chakra-ui/core';
import React from 'react';
import { useMst } from 'src/models/Root';
import { capitalise } from 'src/utils/capitalise';

const LanguageInputs = () => {
	const {
		sheet: { changeFromLanuage, changeToLanuage, fromLang, toLang },
	} = useMst();
	return (
		<Flex my='1rem'>
			<LanguageInput
				name='from'
				onChange={changeFromLanuage}
				value={fromLang}
			/>
			<LanguageInput name='to' onChange={changeToLanuage} value={toLang} />
		</Flex>
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
				onChange={handleChange}
				value={value}
				placeholder={capitalise(name)}
			/>
		</Box>
	);
};

export default LanguageInputs;
