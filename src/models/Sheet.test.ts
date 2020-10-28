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

it('should update properties and capitalise ones that are a description', () => {
	const item = Sheet.create({
		from: 'polish',
		to: 'english',
		orderingDirection: 'no order',
	});

	item.changeTitle('stuff');
	expect(item.title).toBe('Stuff');

	item.changeOrderBy('from');
	expect(item.orderBy).toBe('from');
});
