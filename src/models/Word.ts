import { destroy, Instance, SnapshotIn, types } from 'mobx-state-tree';

const Word = types.model({
	id: types.identifierNumber,
	from: types.string,
	to: types.string,
});

export const Words = types
	.model({
		items: types.optional(types.array(Word), []),
	})
	.actions((self) => ({
		addNewWord(word: SnapshotIn<typeof Word> | Instance<typeof Word>) {
			self.items.push(word);
		},
		remove(item: SnapshotIn<typeof Word>) {
			destroy(item);
		},
	}));
