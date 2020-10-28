import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { MstProvider } from './components/MstProvider';

ReactDOM.render(
	<React.StrictMode>
		<MstProvider>
			<App />
		</MstProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
