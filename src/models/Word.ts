import { types } from 'mobx-state-tree';

export const Word = types.model({
	id: types.identifierNumber,
	from: types.string,
	to: types.string,
});
