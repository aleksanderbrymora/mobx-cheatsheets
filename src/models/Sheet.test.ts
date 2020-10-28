import { Sheet } from './Sheet';

it('should create an instance of a sheet', () => {
	const item = Sheet.create({
		fromLang: 'polish',
		toLang: 'english',
	});

	expect(item).toStrictEqual({
		fromLang: 'polish',
		toLang: 'english',
		title: '',
	});
});

it('should update properties and capitalise ones that are a description', () => {
	const item = Sheet.create({
		fromLang: 'polish',
		toLang: 'english',
	});

	item.changeTitle('stuff');
	expect(item.title).toBe('Stuff');
});
