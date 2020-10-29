import { Flex, Heading, IconButton, Input } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import { Instance } from 'mobx-state-tree';
import React, { FormEvent, useRef, useState } from 'react';
import { Word } from 'src/models/Words';

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

const Buttons: React.FC<{
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
	inputRef: React.RefObject<HTMLInputElement>;
	commitEdit: () => void;
}> = ({ item, change, inputRef, commitEdit }) => {
	const { from, to } = item;
	return (
		<form
			onSubmit={(e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				commitEdit();
			}}
		>
			<Flex>
				<Input
					variant='flushed'
					ref={inputRef}
					value={from}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						change((prev) => ({ ...prev, from: e.target.value }));
					}}
				/>
				<Heading size='xl' mx='1rem'>
					-
				</Heading>
				<Input
					variant='flushed'
					value={to}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						change((prev) => ({ ...prev, to: e.target.value }));
					}}
				/>
				<input
					type='submit'
					style={{ visibility: 'hidden', position: 'absolute' }}
					value='submit'
				/>
			</Flex>
		</form>
	);
};
