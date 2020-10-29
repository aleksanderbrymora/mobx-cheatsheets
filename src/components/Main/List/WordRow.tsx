import { Flex } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import { Instance } from 'mobx-state-tree';
import React, { useRef, useState } from 'react';
import { Word } from 'src/models/Words';
import { Buttons } from './Buttons';
import { FromToEdit } from './FromToEdit';
import { FromToShow } from './FromToShow';

interface Props {
	item: Instance<typeof Word>;
}

export const WordRow: React.FC<Props> = observer(({ item }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editItem, setEditItem] = useState({ from: '', to: '' });
	const inputRef = useRef<HTMLInputElement>(null);

	const { from, to } = item;

	const handleEditStart = () => {
		setIsEditing(true);
		setEditItem({ from, to });
		setTimeout(() => inputRef.current?.focus(), 1);
	};

	const commitEdit = () => {
		const { from, to } = editItem;
		if (isValidEdit()) {
			item.changeFrom(from.trim());
			item.changeTo(to.trim());
			setIsEditing(false);
		}
	};

	const isValidEdit = (): boolean => editItem.to !== '' && editItem.from !== '';

	return (
		<Flex
			bg='gray.900'
			alignItems='center'
			justifyContent='space-between'
			w='100%'
			p='1rem'
			my='1rem'
		>
			<Flex w='100%' justifyContent='space-around' alignItems='cente'>
				{isEditing ? (
					<FromToEdit
						inputRef={inputRef}
						item={editItem}
						change={setEditItem}
						commitEdit={commitEdit}
					/>
				) : (
					<FromToShow from={from} to={to} />
				)}
			</Flex>
			<Buttons
				isEditing={isEditing}
				commitEdit={commitEdit}
				handleEditStart={handleEditStart}
				isValidEdit={isValidEdit}
				item={item}
				setIsEditing={setIsEditing}
			/>
		</Flex>
	);
});
