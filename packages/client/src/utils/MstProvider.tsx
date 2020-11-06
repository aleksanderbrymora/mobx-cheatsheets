import React from 'react';
import { RootStoreContext, rootStore } from '../models/Root';

export const MstProvider: React.FC = ({ children }) => (
	<RootStoreContext.Provider value={rootStore}>
		{children}
	</RootStoreContext.Provider>
);
