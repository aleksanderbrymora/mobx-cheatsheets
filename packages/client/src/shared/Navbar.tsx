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
			<RouterLink to='/'>
				<Stack spacing={3} isInline align='center'>
					<Heading>🧠</Heading>
					<Heading size='lg' as='h1'>
						Gimme Cheats
					</Heading>
				</Stack>
			</RouterLink>
			<Stack isInline spacing={5} align='center'>
				<Stack isInline spacing={8}>
					{/* Current workaround for the Link from Chakra to work with RRD */}
					{/*
      // @ts-ignore */}
					<Link fontSize={18} as={RouterLink} to='/'>
						Home
					</Link>
					{/*
      // @ts-ignore */}
					<Link fontSize={18} as={RouterLink} to='/create'>
						Create
					</Link>
				</Stack>
				<InputGroup>
					<InputLeftElement
						children={<Icon name='search' color='gray.300' />}
					/>
					<Input type='phone' placeholder='Search' />
				</InputGroup>
				<ThemeToggle />
			</Stack>
		</Flex>
	);
};

export default Navbar;
