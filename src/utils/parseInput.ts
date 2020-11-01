export const parseInput = (text: string): [string, string][] => {
	const pairs = text.split('\n').map((p) => p.split('='));
	return pairs.map(([from, to]) => [from.trim(), to.trim()]);
};
