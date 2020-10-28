import { Grid } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import Main from '../Main';
import Side from '../Side';

const App = observer(() => {
	return (
		<Grid templateColumns='4fr 1fr' maxW='1200px' mx='auto' py='1rem' px='2rem'>
			<Main />
			<Side />
		</Grid>
	);
});

export default App;
