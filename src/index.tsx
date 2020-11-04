import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { MstProvider } from './components/MstProvider';
import {
	ThemeProvider,
	theme,
	CSSReset,
	ColorModeProvider,
} from '@chakra-ui/core';
import { logRes } from './db';

logRes();

ReactDOM.render(
	<React.StrictMode>
		<MstProvider>
			<ThemeProvider theme={theme}>
				<ColorModeProvider>
					<CSSReset />
					<App />
				</ColorModeProvider>
			</ThemeProvider>
		</MstProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
