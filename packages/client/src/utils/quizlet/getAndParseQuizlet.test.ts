import { getQuizlet } from './getAndParseQuizlet';

describe('Fetches and parses quizlet page', () => {
	const url = 'https://quizlet.com/pl/221526392/longman-unit-8-flash-cards/';

	it('returns an array of word-pairs fetched from quizlet', async () => {
		const page = await getQuizlet(url);
		console.log(page);
	});
});
