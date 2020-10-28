import { types } from 'mobx-state-tree';
import { capitalise } from 'src/utils/capitalise';

export const orderTypes = ['asc', 'desc', 'no order'];

export const Sheet = types
	.model({
		orderingDirection: types.enumeration('Order', ['asc', 'desc', 'no order']),
		orderBy: types.optional(
			types.enumeration('OrderBy', ['from', 'to', 'no order']),
			'no order',
		),
		from: types.string, // from what language
		to: types.string, // to what language
		title: '',
	})
	.actions((self) => ({
		changeOrderBy(orderType: 'from' | 'to' | 'no order') {
			self.orderBy = orderType;
		},
		changeOrderDirection(direction: 'asc' | 'desc' | 'no order') {
			self.orderingDirection = direction;
		},
		changeFromLanuage(to: string) {
			self.from = capitalise(to);
		},
		changeToLanuage(to: string) {
			self.to = capitalise(to);
		},
		changeTitle(to: string) {
			self.title = capitalise(to);
		},
	}));
