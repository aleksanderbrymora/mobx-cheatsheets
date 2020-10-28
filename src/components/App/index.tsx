import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from '../../models/Root';

const App = observer(() => {
	const store = useMst();
	return (
		<div className='App'>
			<pre>{JSON.stringify(store)}</pre>
		</div>
	);
});

export default App;
