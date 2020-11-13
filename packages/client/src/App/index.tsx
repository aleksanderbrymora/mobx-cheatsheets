import { Spinner } from '@chakra-ui/core';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'src/shared/Navbar';

const Home = React.lazy(() => import('src/pages/home'));
const Create = React.lazy(() => import('src/pages/create'));

const App = () => {
	return (
		<Router>
			<Suspense
				fallback={
					<Spinner
						size='xl'
						position='absolute'
						top='50%'
						right='50%'
						transform='translate(-50%, -50%)'
					/>
				}
				unstable_expectedLoadTime={500}
			>
				<Navbar />
				<Switch>
					<Route exact path='/create'>
						<Create />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
