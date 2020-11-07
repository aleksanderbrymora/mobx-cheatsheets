export const pluralise = (word: string, amount: number): string =>
	word + (amount === 1 ? '' : 's');
