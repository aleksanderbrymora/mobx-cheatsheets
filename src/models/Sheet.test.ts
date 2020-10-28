import { Sheet } from './Sheet';

it('should create an instance of a sheet', () => {
	const item = Sheet.create({
		from: 'polish',
		to: 'english',
		orderingDirection: 'no order',
	});

	expect(item).toStrictEqual({
		from: 'polish',
		orderBy: 'no order',
		to: 'english',
		orderingDirection: 'no order',
		title: '',
	});
});
