import {
	destroy,
	getParent,
	Instance,
	SnapshotIn,
	types,
} from 'mobx-state-tree';
import { capitalise } from '@cheats/utils';
import { exampleWords } from 'src/utils/exampleWords';
import { parseInput } from 'src/utils/parseInput';
import { v4 } from 'uuid';
import { rootStore } from './Root';

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
		input: types.optional(types.string, exampleWords()),
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
		updateInput(input: string) {
			self.input = input;
		},
		importFromTxt() {
			const items = parseInput(self.input);
			items.forEach(([from, to]) => self.items.unshift({ from, to }));
		},
		makeAllLowercase() {
			self.items.forEach((i) => {
				i.changeFrom(i.from.toLowerCase());
				i.changeTo(i.to.toLowerCase());
			});
		},
		makeAllWordsCapitalised() {
			self.items.forEach((i) => {
				i.changeFrom(capitalise(i.from));
				i.changeTo(capitalise(i.to));
			});
		},
	}))
	.views((self) => ({
		get totalItems() {
			return self.items.length;
		},
		get sortedWords(): Instance<typeof Word>[] {
			const { sheet } = rootStore;
			switch (sheet.sortBy) {
				case 'no sort':
					return [...self.items];

				case 'definition':
					return [...self.items].sort(
						(a, b) =>
							(sheet.sortDir === 'ascending' ? 1 : -1) *
							('' + a.from).localeCompare(b.from),
					);

				case 'translation':
					return [...self.items].sort(
						(a, b) =>
							(sheet.sortDir === 'ascending' ? 1 : -1) *
							('' + a.to).localeCompare(b.to),
					);

				default:
					throw new Error(
						'This should not happen at all, congrats for getting here',
					);
			}
		},
		get isInputValid() {
			const pairs = self.input.split('\n');
			for (let i = 0; i < pairs.length; i++) {
				const [, to] = pairs[i].split('=');
				if (!to) return false;
			}
			return true;
		},
	}));
