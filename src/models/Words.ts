import {
	destroy,
	getParent,
	Instance,
	SnapshotIn,
	types,
} from 'mobx-state-tree';
import { v4 } from 'uuid';

export const Word = types
	.model({
		id: types.optional(types.string, v4()),
		from: types.string,
		to: types.string,
	})
	.actions((self) => ({
		changeFrom(to: string) {
			self.from = to;
		},
		changeTo(to: string) {
			self.to = to;
		},
		remove() {
			getParent<typeof Words>(self, 2).remove(self);
		},
	}));

export const Words = types
	.model({
		items: types.optional(types.array(Word), []),
	})
	.actions((self) => ({
		add(word: SnapshotIn<typeof Word> | Instance<typeof Word>) {
			self.items.unshift(word);
		},
		remove(item: SnapshotIn<typeof Word>) {
			destroy(item);
		},
		removeAll() {
			self.items.forEach((i) => destroy(i));
		},
		flip() {
			for (let index = 0; index < self.items.length; index++) {
				self.items[index] = Word.create({
					to: self.items[index].from,
					from: self.items[index].to,
				});
			}
		},
	}))
	.views((self) => ({
		get totalItems() {
			return self.items.length;
		},
		get unsortedWords() {
			return [...self.items];
		},
		get sortedWordsByTo() {
			return [...self.items].sort((a, b) => ('' + a.to).localeCompare(b.to));
		},
		get sortedWordsByFrom() {
			return [...self.items].sort((a, b) =>
				('' + a.from).localeCompare(b.from),
			);
		},
	}));
