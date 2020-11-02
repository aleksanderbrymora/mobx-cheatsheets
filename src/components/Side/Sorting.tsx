import { IconButton, Select, Stack } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React, { ChangeEvent } from 'react';
import { useMst } from 'src/models/Root';

const Sorting = observer(() => {
	const { sheet } = useMst();

	const handleSortTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const to = e.target.value as typeof sheet.sortBy;
		sheet.changeSortingType(to);
	};

	const handleSortDirectionChange = () =>
		sheet.changeSortingDirection(
			sheet.sortDir === 'ascending' ? 'descending' : 'ascending',
		);

	return (
		<Stack isInline>
			<Select onChange={handleSortTypeChange}>
				<option defaultChecked value='no sort'>
					No sorting
				</option>
				<option value='definition'>Definition</option>
				<option value='translation'>Translation</option>
			</Select>
			<IconButton
				onClick={handleSortDirectionChange}
				aria-label='change sorting direction'
				icon={sheet.sortDir === 'ascending' ? 'arrow-down' : 'arrow-up'}
			/>
		</Stack>
	);
});

export default Sorting;
