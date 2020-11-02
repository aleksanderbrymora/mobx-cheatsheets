import { types } from 'mobx-state-tree';

export const orderTypes = ['asc', 'desc', 'no order'];

export const Sheet = types
	.model({
		fromLang: types.string, // from what language
		toLang: types.string, // to what language
		title: '',
		sortBy: types.optional(
			types.enumeration('sortBy', ['no sort', 'definition', 'translation']),
			'no sort',
		),
		sortDir: types.optional(
			types.enumeration('sortDirection', ['ascending', 'descending']),
			'ascending',
		),
	})
	.actions((self) => ({
		changeFromLanuage(to: string) {
			self.fromLang = to;
		},
		changeToLanuage(to: string) {
			self.toLang = to;
		},
		changeTitle(to: string) {
			self.title = to;
		},
		changeSortingType(to: typeof self.sortBy) {
			self.sortBy = to;
		},
		changeSortingDirection(to: typeof self.sortDir) {
			self.sortDir = to;
		},
	}));
