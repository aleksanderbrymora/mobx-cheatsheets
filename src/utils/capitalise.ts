export const capitalise = (word: string): string => {
	const [first, ...rest] = word;
	return first.toUpperCase() + rest.join('').toLowerCase();
};
