import { Box, Flex, Heading, IconButton, Input } from '@chakra-ui/core';
import { Instance } from 'mobx-state-tree';
import React, { useState } from 'react';
import { Word } from 'src/models/Words';
import { observer } from 'mobx-react';

interface Props {
	item: Instance<typeof Word>;
}

export const WordRow: React.FC<Props> = observer(({ item }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editItem, setEditItem] = useState({ from: '', to: '' });
	const { from, to } = item;

	const handleEditStart = () => {
		setIsEditing(true);
		setEditItem({ from, to });
	};

	const commitEdit = () => {
		const { from, to } = editItem;
		if (isValidEdit()) {
			item.changeFrom(from);
			item.changeTo(to);
		}
		setIsEditing(false);
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
					<FromToEdit item={editItem} change={setEditItem} />
				) : (
					<FromToShow from={from} to={to} />
				)}
			</Flex>
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
		</Flex>
	);
});

const FromToShow: React.FC<{ from: string; to: string }> = ({ from, to }) => {
	return (
		<Heading as='h2' size='md'>
			{from} - {to}
		</Heading>
	);
};

const FromToEdit: React.FC<{
	item: { from: string; to: string };
	change: React.Dispatch<
		React.SetStateAction<{
			from: string;
			to: string;
		}>
	>;
}> = ({ item, change }) => {
	const { from, to } = item;
	return (
		<Flex>
			<Input
				variant='flushed'
				value={from}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					change((prev) => ({ ...prev, from: e.target.value }));
				}}
			/>
			<Box mx='1rem'> - </Box>
			<Input
				variant='flushed'
				value={to}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					change((prev) => ({ ...prev, to: e.target.value }));
				}}
			/>
		</Flex>
	);
};
