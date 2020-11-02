import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';
import React from 'react';
import { useMst } from 'src/models/Root';

const Transformations = () => {
	const { words } = useMst();
	return (
		<Menu>
			<MenuButton as={Button} w='100%'>
				Word transformations
			</MenuButton>
			<MenuList>
				<MenuItem onClick={words.makeAllLowercase}>
					Make all words lowercase
				</MenuItem>
				<MenuItem onClick={words.makeAllWordsCapitalised}>
					All words capitalised
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default Transformations;
