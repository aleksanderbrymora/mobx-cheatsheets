import {
	Box,
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from '@chakra-ui/core';
import React from 'react';
import ImportFromQuizlet from './ImportFromQuizlet';
import ImportFromTxt from './ImportFromTxt';

const Import = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef<HTMLButtonElement>(null);

	return (
		<Box mt={2}>
			<Button ref={btnRef} onClick={onOpen} w='100%'>
				Import
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
				size='md'
			>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Import with these methods</DrawerHeader>

						<DrawerBody>
							<Divider />
							<ImportFromQuizlet />
							<Divider mt={5} />
							<ImportFromTxt />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Box>
	);
};

export default Import;
