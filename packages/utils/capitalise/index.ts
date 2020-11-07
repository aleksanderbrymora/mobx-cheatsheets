export const capitalise = (word: string): string => {
	const [first, ...rest] = word.split('');
	return first.toUpperCase() + rest.join('').toLowerCase();
};
