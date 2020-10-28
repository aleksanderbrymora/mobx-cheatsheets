import { Box, Input } from '@chakra-ui/core';
import React from 'react';
import { useMst } from 'src/models/Root';

const TitleInput = () => {
	const { sheet } = useMst();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		sheet.changeTitle(e.target.value);
	};

	return (
		<Box mb='1rem'>
			<label htmlFor='title-input'>Title</label>
			<Input
				id='title-input'
				onChange={handleInputChange}
				placeholder='Title of the cheat sheet'
				value={sheet.title}
			/>
		</Box>
	);
};

export default TitleInput;
