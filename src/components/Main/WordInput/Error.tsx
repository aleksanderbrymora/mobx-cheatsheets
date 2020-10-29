import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	CloseButton,
} from '@chakra-ui/core';
import React from 'react';
import { capitalise } from 'src/utils/capitalise';

export const Error: React.FC<{
	what: string;
	close: () => void;
}> = ({ what, close }) => {
	return (
		<Alert status='error' my='1rem' data-testid='warning-input-empty'>
			<AlertIcon />
			<AlertTitle mr={2}>Input can't be empty!</AlertTitle>
			<AlertDescription>
				You left "{capitalise(what)}" field empty. Make sure you fill it in.
			</AlertDescription>
			<CloseButton position='absolute' right='8px' top='8px' onClick={close} />
		</Alert>
	);
};
