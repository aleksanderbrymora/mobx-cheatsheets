import {
	Button,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList,
} from '@chakra-ui/core';
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
				<MenuGroup title='Transform words'>
					<MenuItem onClick={words.makeAllLowercase}>
						Make all words lowercase
					</MenuItem>
					<MenuItem onClick={words.makeAllWordsCapitalised}>
						Make all words capitalised
					</MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup title='Organise'>
					<MenuItem onClick={words.removeAll}>Remove all words</MenuItem>
					<MenuItem onClick={words.flip}>Flip words</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	);
};

export default Transformations;
