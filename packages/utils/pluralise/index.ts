export const pluralise = (word: string, amount: number): string => {
	return word + (amount === 1 ? '' : 's');
};
