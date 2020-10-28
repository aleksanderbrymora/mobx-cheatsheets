import { onSnapshot, types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { Sheet } from './Sheet';
import { Word } from './Word';

export const RootModel = types.model({
	sheet: Sheet,
	words: types.optional(types.array(Word), []),
});

let initialState = RootModel.create({
	words: [],
	sheet: {
		from: 'polish',
		to: 'english',
		ordering: 'no order',
	},
});

const data = localStorage.getItem('rootState');

if (data) {
	const json = JSON.parse(data);
	if (RootModel.is(json)) {
		initialState = RootModel.create(json);
	}
}

export const rootStore = initialState;

// backing up the state to local storage
onSnapshot(rootStore, (snapshot) => {
	localStorage.setItem('rootState', JSON.stringify(snapshot));
});

export const RootStoreContext = createContext(rootStore);
export const useMst = () => useContext(RootStoreContext);
