import { Words } from './Word';

it('should create words instance with one word in it', () => {
	const words = Words.create({
		items: [
			{
				id: 1,
				from: 'telefon',
				to: 'phone',
			},
		],
	});

	expect(words.items[0]).toStrictEqual({
		id: 1,
		from: 'telefon',
		to: 'phone',
	});
});
