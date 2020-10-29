import { Flex, IconButton } from '@chakra-ui/core';
import { Instance } from 'mobx-state-tree';
import React from 'react';
import { Word } from 'src/models/Words';

export const Buttons: React.FC<{
	isEditing: boolean;
	commitEdit: () => void;
	isValidEdit: () => boolean;
	handleEditStart: () => void;
	item: Instance<typeof Word>;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
	commitEdit,
	isEditing,
	isValidEdit,
	handleEditStart,
	item,
	setIsEditing,
}) => {
	return (
		<Flex ml='2rem'>
			{isEditing ? (
				<>
					<IconButton
						aria-label='confirm edit'
						icon='check'
						onClick={commitEdit}
						mr='1rem'
						isDisabled={!isValidEdit()}
					/>
					<IconButton
						aria-label='discard edit'
						icon='close'
						onClick={() => setIsEditing(false)}
					/>
				</>
			) : (
				<>
					<IconButton
						aria-label='edit this word'
						icon='edit'
						mr='1rem'
						onClick={handleEditStart}
					/>
					<IconButton
						aria-label='delete this word'
						icon='delete'
						onClick={item.remove}
					/>
				</>
			)}
		</Flex>
	);
};
