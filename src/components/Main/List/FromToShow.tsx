import { Heading } from '@chakra-ui/core';
import React from 'react';

export const FromToShow: React.FC<{ from: string; to: string }> = ({
	from,
	to,
}) => {
	return (
		<Heading as='h2' size='md'>
			{from} - {to}
		</Heading>
	);
};
