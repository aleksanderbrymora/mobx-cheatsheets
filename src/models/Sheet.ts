import { types } from 'mobx-state-tree';

export const orderTypes = ['asc', 'desc', 'no order'];

export const Sheet = types.model({
	ordering: types.enumeration('Order', ['asc', 'desc', 'no order']),
	orderBy: types.optional(
		types.enumeration('OrderBy', ['asc', 'desc', 'no order']),
		'no order',
	),
	from: types.string, // from what language
	to: types.string, // to what language
	title: '',
});
