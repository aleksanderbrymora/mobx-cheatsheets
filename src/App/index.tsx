import { observer } from 'mobx-react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from 'src/pages/create';
import Home from 'src/pages/home';

const App = observer(() => {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<Home />
				</Route>
				<Route path='/create'>
					<Create />
				</Route>
			</Switch>
		</Router>
	);
});

export default App;
