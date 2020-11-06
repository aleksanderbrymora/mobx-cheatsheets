import { Grid } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import Main from 'src/pages/create/components/Main';
import Side from './components/Side';

const Create = observer(() => {
	return (
		<Grid
			templateColumns='4fr 1fr'
			maxW='1200px'
			mx='auto'
			py='1rem'
			px='2rem'
			minH='100vh'
		>
			<Main />
			<Side />
		</Grid>
	);
});

export default Create;
