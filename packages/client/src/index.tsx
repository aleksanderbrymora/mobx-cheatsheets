import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MstProvider } from './utils/MstProvider';
import {
	ThemeProvider,
	theme,
	CSSReset,
	ColorModeProvider,
} from '@chakra-ui/core';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.unstable_createRoot(root).render(
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
);
