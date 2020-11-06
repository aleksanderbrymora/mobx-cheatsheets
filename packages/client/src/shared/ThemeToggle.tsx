import { IconButton, useColorMode } from '@chakra-ui/core';
import React from 'react';

const ThemeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			onClick={toggleColorMode}
			aria-label='Toggle current theme'
			icon={colorMode === 'light' ? 'moon' : 'sun'}
		/>
	);
};

export default ThemeToggle;
