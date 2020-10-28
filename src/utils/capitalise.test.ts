import { capitalise } from './capitalise';

it('capitalises words', () => {
	expect(capitalise('wow')).toBe('Wow');
	expect(capitalise('wOW')).toBe('Wow');
	expect(capitalise('666')).toBe('666');
});
