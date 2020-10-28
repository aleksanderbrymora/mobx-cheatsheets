import { types } from 'mobx-state-tree';

export const orderTypes = ['asc', 'desc', 'no order'];

export const Sheet = types
	.model({
		fromLang: types.string, // from what language
		toLang: types.string, // to what language
		title: '',
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
	}));
