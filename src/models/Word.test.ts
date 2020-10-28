import { Word } from './Word';

it('should create word instance', () => {
	const word = Word.create({
		id: 1,
		from: 'telefon',
		to: 'phone',
	});

	expect(word).toStrictEqual({
		id: 1,
		from: 'telefon',
		to: 'phone',
	});
});
