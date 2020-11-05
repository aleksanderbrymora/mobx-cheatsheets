import {
	Flex,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Stack,
} from '@chakra-ui/core';
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
			py={3}
		>
			<ThemeToggle />
			<RouterLink to='/'>
				<Stack spacing={3} isInline align='center'>
					<Heading>🧠</Heading>
					<Heading size='lg' as='h1'>
						Gimme Cheats
					</Heading>
				</Stack>
			</RouterLink>
			<Stack isInline spacing={8} align='center'>
				<Stack isInline spacing={8}>
					<Link fontSize={18}>
						<RouterLink to='/'>Home</RouterLink>
					</Link>
					<Link fontSize={18}>
						<RouterLink to='/create'>Create</RouterLink>
					</Link>
				</Stack>
				<InputGroup>
					<InputLeftElement
						children={<Icon name='search' color='gray.300' />}
					/>
					<Input type='phone' placeholder='Search' />
				</InputGroup>
			</Stack>
		</Flex>
	);
};

export default Navbar;
