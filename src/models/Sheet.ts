import { types } from 'mobx-state-tree';
import { capitalise } from 'src/utils/capitalise';

export const orderTypes = ['asc', 'desc', 'no order'];

export const Sheet = types
	.model({
		fromLang: types.string, // from what language
		toLang: types.string, // to what language
		title: '',
	})
	.actions((self) => ({
		changeFromLanuage(to: string) {
			self.fromLang = capitalise(to);
		},
		changeToLanuage(to: string) {
			self.toLang = capitalise(to);
		},
		changeTitle(to: string) {
			self.title = capitalise(to);
		},
	}));
