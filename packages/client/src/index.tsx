import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MstProvider } from './utils/MstProvider';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {
	ThemeProvider,
	theme,
	CSSReset,
	ColorModeProvider,
} from '@chakra-ui/core';

const root = document.getElementById('root') as HTMLElement;

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

ReactDOM.unstable_createRoot(root).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<MstProvider>
				<ThemeProvider theme={theme}>
					<ColorModeProvider>
						<CSSReset />
						<App />
					</ColorModeProvider>
				</ThemeProvider>
			</MstProvider>
		</ApolloProvider>
	</React.StrictMode>,
);
