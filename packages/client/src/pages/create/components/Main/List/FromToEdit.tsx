import { Flex, Heading, Input } from '@chakra-ui/core';
import React, { FormEvent } from 'react';

export const FromToEdit: React.FC<{
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
