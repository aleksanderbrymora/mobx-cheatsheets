import { Box, Input } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'src/models/Root';

const TitleInput = observer(() => {
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
});

export default TitleInput;
