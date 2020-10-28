import { pluralise } from './pluralise';

it('should pluralise words depending on amount passed in', () => {
	expect(pluralise('word', 1)).toBe('word');
	expect(pluralise('word', 0)).toBe('words');
	expect(pluralise('word', 2)).toBe('words');
});
