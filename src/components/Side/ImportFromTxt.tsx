import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Textarea,
	useDisclosure,
} from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React, { ChangeEvent } from 'react';
import { useMst } from 'src/models/Root';

const ImportFromTxt = observer(() => {
	const { words } = useMst();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const btnRef = React.useRef<HTMLButtonElement>(null);
	return (
		<>
			<Button
				ref={btnRef}
				onClick={onOpen}
				variant='ghost'
				margin='auto'
				display='block'
				mt={5}
			>
				Import from text
			</Button>

			<Modal
				onClose={onClose}
				finalFocusRef={btnRef}
				isOpen={isOpen}
				scrollBehavior='inside'
				size='xl'
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Input your list of words</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text textAlign='center' my={1}>
							Input definition, followed by a '=' and the translation. Separate
							them with enter
						</Text>
						<Textarea
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								words.updateInput(e.target.value)
							}
							value={words.input}
							h='90%'
							placeholder={`stuff=rzeczy
more stuff=wiecej rzeczy`}
						/>
					</ModalBody>
					<ModalFooter>
						<Button variant='ghost' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button
							onClick={() => {
								words.importFromTxt();
								onClose();
							}}
							variantColor='blue'
							isDisabled={!words.isInputValid}
						>
							Import
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
});

export default ImportFromTxt;
