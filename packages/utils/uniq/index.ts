export const uniq = <T extends string | number>(arr: T[]): T[] => {
	return arr.reduce(
		(acc: T[], curr: T) => (acc.includes(curr) ? acc : [...acc, curr]),
		[],
	);
};
