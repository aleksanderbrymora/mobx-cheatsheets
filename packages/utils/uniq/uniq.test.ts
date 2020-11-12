import { uniq } from '.';

it('leaves only unique items in the array', () => {
	expect(uniq([1, 1, 2, 3])).toStrictEqual([1, 2, 3]);
});
