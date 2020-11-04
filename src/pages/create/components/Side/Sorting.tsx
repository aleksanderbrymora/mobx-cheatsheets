import { Box, IconButton, Select, Stack } from '@chakra-ui/core';
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
		<Box my={5}>
			<label htmlFor='sort-options'>Sorting options</label>
			<Stack isInline>
				<Select
					id='sort-options'
					value={sheet.sortBy}
					onChange={handleSortTypeChange}
				>
					<option value='no sort'>No sorting</option>
					<option value='definition'>Definition</option>
					<option value='translation'>Translation</option>
				</Select>
				{sheet.sortBy !== 'no sort' && (
					<IconButton
						onClick={handleSortDirectionChange}
						aria-label='change sorting direction'
						icon={sheet.sortDir === 'ascending' ? 'arrow-down' : 'arrow-up'}
					/>
				)}
			</Stack>
		</Box>
	);
});

export default Sorting;
