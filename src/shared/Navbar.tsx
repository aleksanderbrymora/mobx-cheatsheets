import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
	return (
		<Flex
			bg='gray.800'
			justifyContent='space-between'
			maxW='1200px'
			as='nav'
			margin='auto'
			px='2rem'
			alignItems='center'
			py={2}
		>
			<ThemeToggle />
			<Heading>🧠</Heading>
			<Box>
				<Stack isInline spacing={8}>
					<Link fontSize={18}>
						<RouterLink to='/'>Home</RouterLink>
					</Link>
					<Link fontSize={18}>
						<RouterLink to='/create'>Create</RouterLink>
					</Link>
				</Stack>
			</Box>
		</Flex>
	);
};

export default Navbar;
